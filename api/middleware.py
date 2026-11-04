from django.http import HttpResponse
from . import security


class SecurityMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        ip = self._get_ip(request)
        request.META['REMOTE_ADDR'] = ip

        if security.check_rate(ip):
            return HttpResponse(status=429)

        if request.method == 'OPTIONS':
            response = HttpResponse(status=200)
            self._add_cors(response)
            return response

        response = self.get_response(request)
        self._add_cors(response)
        return response

    def _get_ip(self, request):
        xff = request.META.get('HTTP_X_FORWARDED_FOR', '')
        return xff.split(',')[0].strip() if xff else request.META.get('REMOTE_ADDR', '')

    def _add_cors(self, response):
        response['Access-Control-Allow-Origin']  = '*'
        response['Access-Control-Allow-Headers'] = 'Content-Type'
        response['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        response['Access-Control-Max-Age']       = '86400'
