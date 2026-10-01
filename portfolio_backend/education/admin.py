from django.contrib import admin
from .models import Education


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree",
        "institute",
        "board",
        "start_year",
        "end_year",
        "display_order",
    )

    list_editable = (
        "display_order",
    )

    search_fields = (
        "degree",
        "institute",
        "board",
    )

    ordering = (
        "display_order",
    )