
# Create your models here.
from django.db import models


class Resume(models.Model):
    title = models.CharField(max_length=100, default="My Resume")
    resume = models.FileField(upload_to="resume/")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title