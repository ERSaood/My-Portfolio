from django.db import models

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institute = models.CharField(max_length=250)
    board = models.CharField(max_length=150, blank=True)
    location = models.CharField(max_length=150, blank=True)

    start_year = models.CharField(max_length=20)
    end_year = models.CharField(max_length=20)

    description = models.TextField(blank=True)

    coursework = models.TextField(
        help_text="One subject per line"
    )

    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.degree
