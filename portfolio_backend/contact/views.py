from django.conf import settings
from django.core.mail import send_mail

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import ContactSerializer


# Send Thank You Email to User
def _send_contact_confirmation(contact):
    send_mail(
        subject="Thank You for Contacting Me",
        message=f"""
Hi {contact.name},

Thank you for contacting me.

I have received your message and will get back to you as soon as possible.

Regards,
Saood Khan
""",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[contact.email],
        fail_silently=False,
    )


# Send Notification Email to Admin
def _send_admin_notification(contact):
    send_mail(
        subject="New Portfolio Contact",
        message=f"""
New Contact Form Submission

Name: {contact.name}
Email: {contact.email}
Subject: {contact.subject}

Message:
{contact.message}
""",
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.EMAIL_HOST_USER],
        fail_silently=False,
    )


@api_view(["POST"])
@permission_classes([AllowAny])
def contact_api(request):
    serializer = ContactSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(
            {
                "error": "Validation failed",
                "details": serializer.errors,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        # Save data in database
        contact = serializer.save()

        # Send Thank You Email to User
        _send_contact_confirmation(contact)

        # Send Notification Email to Admin
        _send_admin_notification(contact)

        return Response(
            {"message": "Message sent successfully!"},
            status=status.HTTP_200_OK,
        )

    except Exception as e:
        print("Email Error:", e)

        return Response(
            {
                "error": str(e)
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )