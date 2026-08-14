
# Create your models here.
from django.db import models
from django.contrib import admin


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    image = models.ImageField(upload_to="projects/")

    github_url = models.URLField(blank=True)
    live_demo_url = models.URLField(blank=True)

    features = models.TextField(
        blank=True,
        help_text="Login, Payment, Dashboard"
    )

    technologies = models.CharField(
        max_length=300,
        help_text="Example: React, Django, Tailwind CSS, MySQL"
    )

    featured = models.BooleanField(default=False)

    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.title



@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "featured",
        "display_order",
        "created_at",
    )

    list_filter = (
        "featured",
        "created_at",
    )

    search_fields = (
        "title",
        "technologies",
    )

    ordering = (
        "display_order",
        "-created_at",
    )