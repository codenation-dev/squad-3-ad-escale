from django.contrib import admin
from django.urls import path, include
from apps.api.views import UserView

urlpatterns = [
    path('users/', UserView.as_view()),
]
