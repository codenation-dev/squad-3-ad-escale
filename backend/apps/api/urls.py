from django.contrib import admin
from django.urls import path, include
from apps.api.views import UserView, PuppyView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('pets', PuppyView)

urlpatterns = [
    path('users/', UserView.as_view()),
    path('', include(router.urls))
]

