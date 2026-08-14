
# Create your models here.
from django.db import models


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("Frontend", "Frontend"),
        ("Backend", "Backend"),
        ("Database", "Database"),
        ("Tools", "Tools"),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    icon = models.CharField(
        max_length=100,
        help_text="React Icon name. Example: FaReact, SiDjango, SiMysql"
    )
    color = models.CharField(
        max_length=100,
        default="text-blue-500",
        help_text="Tailwind CSS class"
    )

    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name