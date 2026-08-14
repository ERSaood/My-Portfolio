import re

from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["name", "email", "subject", "message"]

    def validate_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Name is required.")
        if len(value) < 3:
            raise serializers.ValidationError("Name must be at least 3 characters long.")
        if not re.fullmatch(r"[A-Za-z\s]+", value):
            raise serializers.ValidationError("Name can only contain alphabets and spaces.")
        return value

    def validate_email(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Email is required.")
        return value

    def validate_subject(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Subject is required.")
        if len(value) < 5:
            raise serializers.ValidationError("Subject must be at least 5 characters long.")
        if len(value) > 100:
            raise serializers.ValidationError("Subject cannot be more than 100 characters.")
        return value

    def validate_message(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Message is required.")
        if len(value) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        if len(value) > 1000:
            raise serializers.ValidationError("Message cannot be more than 1000 characters.")
        return value
