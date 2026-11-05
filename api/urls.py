from django.urls import path
from . import views

urlpatterns = [
    path('log', views.api_log),
    path('contact', views.api_contact),
    path('contacts', views.api_contacts),
]
