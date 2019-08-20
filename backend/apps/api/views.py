from rest_framework.generics import ListCreateAPIView
from apps.api.models import CustomUser
from apps.api.serializers import UserSerializer

class UserView(ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer