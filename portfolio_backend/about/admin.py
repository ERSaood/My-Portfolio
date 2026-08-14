from django.contrib import admin

from .models import About


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "profession",
        "email",
        "phone",
        "location",
        "display_order",
    )
    search_fields = ("name", "profession", "email", "location")
    ordering = ("display_order",)
