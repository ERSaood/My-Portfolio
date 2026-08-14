from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "message_preview", "created_at")
    search_fields = ("name", "email", "subject", "message")
    list_filter = ("created_at",)
    ordering = ("-created_at",)
    date_hierarchy = "created_at"
    readonly_fields = ("created_at",)

    @admin.display(description="Message preview")
    def message_preview(self, obj):
        preview_length = 75
        return (
            obj.message
            if len(obj.message) <= preview_length
            else f"{obj.message[:preview_length].rstrip()}…"
        )
