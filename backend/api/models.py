from django.db import models

class ProjectImage(models.Model):
    image = models.ImageField(upload_to='projects/')
    alt_text = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"Image {self.id} - {self.alt_text}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    year = models.CharField(max_length=10)
    description = models.TextField()
    hero_image = models.ImageField(upload_to='projects/hero/')
    gallery = models.ManyToManyField(ProjectImage, blank=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    project_type = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"

class InteriorMakeover(models.Model):
    title = models.CharField(max_length=200, default="Real Interior Makeover")
    before_image = models.ImageField(upload_to='makeover/before/')
    after_image = models.ImageField(upload_to='makeover/after/')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title