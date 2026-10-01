from django.db import models


class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    location = models.CharField(max_length=150, blank=True)

    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50, default="Present")

    description = models.TextField()

    technologies = models.CharField(
        max_length=300,
        blank=True,
        help_text="Comma separated e.g. React,Django,MySQL"
    )

    company_logo = models.ImageField(
        upload_to="experience/",
        blank=True,
        null=True
    )

    display_order = models.PositiveIntegerField(default=0)
    icon = models.CharField(
    max_length=30,
    default="Briefcase"
    )
    responsibilities = models.TextField(
    help_text="One responsibility per line"
)
    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return f"{self.position} - {self.company}"
    