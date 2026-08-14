from django.contrib import admin
from .models import Experience


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "company",
        "position",
        "start_date",
        "end_date",
        "display_order",
    )

    list_editable = (
        "display_order",
    )

    search_fields = (
        "company",
        "position",
    )