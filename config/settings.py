import os
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).resolve().parent.parent / '.env')
except ImportError:
    pass

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY    = os.environ.get('SECRET_KEY', 'django-insecure-change-me')
DEBUG         = os.environ.get('DEBUG', 'False').lower() == 'true'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '*').split(',')

INSTALLED_APPS = [
    'django.contrib.staticfiles',
    'api.apps.ApiConfig',
]

MIDDLEWARE = [
    'django.middleware.gzip.GZipMiddleware',
    'api.middleware.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [BASE_DIR],
    'APP_DIRS': False,
    'OPTIONS': {'context_processors': []},
}]

WSGI_APPLICATION = 'config.wsgi.application'
STATIC_URL = '/static/'

RATE_WINDOW = int(os.environ.get('RATE_WINDOW', '10'))
RATE_LIMIT  = int(os.environ.get('RATE_LIMIT',  '80'))

PORT     = int(os.environ.get('PORT', '8080'))
BASE_URL = os.environ.get('BASE_URL', f'http://localhost:{PORT}')

TELEGRAM_TOKEN   = os.environ.get('TELEGRAM_TOKEN', '')
TELEGRAM_CHAT_ID = os.environ.get('TELEGRAM_CHAT_ID', '')
BILLING_DAY      = int(os.environ.get('BILLING_DAY', '0'))

if not DEBUG:
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
    SESSION_COOKIE_SECURE   = True
    CSRF_COOKIE_SECURE      = True
