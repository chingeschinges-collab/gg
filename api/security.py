import json, os, threading, subprocess, time, urllib.request, calendar
from datetime import datetime, timedelta

lock      = threading.RLock()
req_times = {}

_tg_token   = None
_tg_chat_id = None


def device_label(ua):
    if not ua:
        return 'Тодорхойгүй'
    ua_l = ua.lower()
    if 'iphone' in ua_l:   return 'iPhone'
    if 'ipad' in ua_l:     return 'iPad'
    if 'android' in ua_l:  return 'Android'
    if 'windows' in ua_l:  return 'Windows'
    if 'macintosh' in ua_l or 'mac os' in ua_l: return 'Mac'
    if 'linux' in ua_l:    return 'Linux'
    return ua[:20]

def check_rate(ip):
    from django.conf import settings
    now = time.time()
    with lock:
        times = [t for t in req_times.get(ip, []) if now - t < settings.RATE_WINDOW]
        times.append(now)
        req_times[ip] = times
        return len(times) > settings.RATE_LIMIT


def init_telegram(token, chat_id):
    global _tg_token, _tg_chat_id
    _tg_token   = token
    _tg_chat_id = chat_id


def _tg_api(method, data=None):
    if not _tg_token:
        return {}
    url  = f'https://api.telegram.org/bot{_tg_token}/{method}'
    body = json.dumps(data or {}).encode()
    req  = urllib.request.Request(url, data=body,
                                  headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=35) as r:
            return json.loads(r.read())
    except Exception:
        return {}

def _send_telegram(title, message, subtitle=''):
    lines = [f'<b>{title}</b>']
    if subtitle:
        lines.append(f'<i>{subtitle}</i>')
    lines.append(message)
    data = {'chat_id': _tg_chat_id, 'text': '\n'.join(lines), 'parse_mode': 'HTML'}
    threading.Thread(target=_tg_api, args=('sendMessage', data), daemon=True).start()

def _send_osascript(title, message, subtitle=''):
    try:
        def _esc(s):
            return s.replace('\\', '\\\\').replace('"', '\\"')
        body   = f'{_esc(subtitle)}\\n{_esc(message)}' if subtitle else _esc(message)
        script = f'display alert "{_esc(title)}" message "{body}" giving up after 8'
        subprocess.Popen(['osascript', '-e', script])
    except Exception:
        pass

def send_notification(title, message, subtitle=''):
    if _tg_token and _tg_chat_id:
        _send_telegram(title, message, subtitle)
    else:
        _send_osascript(title, message, subtitle)


def start_billing_reminder(billing_day, warn_days=3):
    threading.Thread(target=_billing_loop, args=(billing_day, warn_days), daemon=True).start()

def _billing_loop(billing_day, warn_days):
    while True:
        try:
            now = datetime.now()
            # Тухайн сарын billing date
            last = calendar.monthrange(now.year, now.month)[1]
            bd   = min(billing_day, last)
            bill = datetime(now.year, now.month, bd)
            # Өнгөрсөн бол дараагийн сард
            if bill.date() <= now.date():
                m, y = (now.month % 12) + 1, now.year + (1 if now.month == 12 else 0)
                bill = datetime(y, m, min(billing_day, calendar.monthrange(y, m)[1]))

            days_left = (bill.date() - now.date()).days

            if days_left <= warn_days:
                send_notification(
                    '💳 Render төлбөр сануулга',
                    f'<b>{days_left} хоногийн дараа</b> Render-ийн $7 төлбөр хүлээгдэж байна!\n'
                    f'Дансаа цэнэглэхээ мартуузай.',
                )

            # Маргааш 09:00 цагт дахин шалгана
            tomorrow_9 = (now + timedelta(days=1)).replace(hour=9, minute=0, second=0, microsecond=0)
            time.sleep((tomorrow_9 - now).total_seconds())
        except Exception:
            time.sleep(3600)

