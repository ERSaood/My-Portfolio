from django.db import models


class About(models.Model):
    name = models.CharField(max_length=255)
    profession = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    description = models.TextField()
    profile_image = models.ImageField(upload_to="about/")
    resume = models.FileField(upload_to="resume/")
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    location = models.CharField(max_length=255)
    experience = models.CharField(max_length=100)
    projects = models.CharField(max_length=100)
    technologies = models.CharField(max_length=100)
    github = models.URLField()
    linkedin = models.URLField()
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.name
