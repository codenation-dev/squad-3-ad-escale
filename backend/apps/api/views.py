from rest_framework.generics import ListCreateAPIView
from apps.api.models import CustomUser, Puppy
from apps.api.serializers import UserSerializer, PuppySerializer
from rest_framework import viewsets


class UserView(ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class PuppyView(viewsets.ModelViewSet):
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer
