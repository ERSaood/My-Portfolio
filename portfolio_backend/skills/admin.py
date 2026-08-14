
# Register your models here.
from django.contrib import admin
from .models import Skill


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "display_order",
    )

    list_filter = (
        "category",
    )

    search_fields = (
        "name",
    )

    ordering = (
        "display_order",
    )