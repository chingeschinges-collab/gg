from django.apps import AppConfig

class ApiConfig(AppConfig):
    name = 'api'

    def ready(self):
        from . import security
        from django.conf import settings
        token   = getattr(settings, 'TELEGRAM_TOKEN', '')
        chat_id = getattr(settings, 'TELEGRAM_CHAT_ID', '')
        if token and chat_id:
            security.init_telegram(token, chat_id)
            billing_day = int(getattr(settings, 'BILLING_DAY', 0))
            if billing_day:
                security.start_billing_reminder(billing_day)
