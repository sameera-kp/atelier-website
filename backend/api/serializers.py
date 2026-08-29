from rest_framework import serializers
from .models import Project, ProjectImage, ContactMessage,InteriorMakeover

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    gallery = ProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class InteriorMakeoverSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteriorMakeover
        fields = '__all__'          