from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions, serializers
from .models import Project, ProjectImage, ContactMessage, InteriorMakeover
from .serializers import (
    ProjectSerializer, 
    ProjectImageSerializer, 
    ContactMessageSerializer, 
    InteriorMakeoverSerializer
)

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectImageViewSet(viewsets.ModelViewSet):
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

class InteriorMakeoverViewSet(viewsets.ModelViewSet):
    queryset = InteriorMakeover.objects.all()
    serializer_class = InteriorMakeoverSerializer

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer