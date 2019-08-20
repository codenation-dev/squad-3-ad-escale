from rest_framework import serializers
from apps.api.models import CustomUser, Puppy


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', )


class PuppySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Puppy
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        url = obj.image.url if obj.image else ''
        return request.build_absolute_uri(url) if request and url else url