from django.contrib import admin
from .models import Project, ProjectImage, ContactMessage,InteriorMakeover

admin.site.register(ProjectImage)
admin.site.register(ContactMessage)
admin.site.register(InteriorMakeover)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    filter_horizontal = ('gallery',)  
    prepopulated_fields = {'slug': ('title',)}