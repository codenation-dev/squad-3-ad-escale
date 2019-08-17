from django.shortcuts import render
from rest_framework import viewsets
from .models import Puppy
from .serializers import PuppySerializer



class PuppyView(viewsets.ModelViewSet):
    queryset = Puppy.objects.all()
    serializer_class = PuppySerializer

