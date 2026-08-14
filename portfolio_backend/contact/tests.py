import json

from django.core import mail
from django.test import TestCase, override_settings

from .models import Contact


@override_settings(EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend")
class ContactApiTests(TestCase):
    def test_contact_submission_saves_message_and_sends_confirmation(self):
        response = self.client.post(
            "/api/contact/",
            data=json.dumps(
                {
                    "name": "John",
                    "email": "john@example.com",
                    "subject": "Project enquiry",
                    "message": "I would like to discuss a project.",
                }
            ),
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Contact.objects.count(), 1)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, "Thank You for Contacting Me")
        self.assertEqual(mail.outbox[0].to, ["john@example.com"])
        self.assertIn("Hi John,", mail.outbox[0].body)

    def test_contact_submission_rejects_invalid_payload(self):
        response = self.client.post(
            "/api/contact/",
            data=json.dumps({"name": "Jo", "email": "invalid", "subject": "", "message": "Hi"}),
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(Contact.objects.count(), 0)
        self.assertEqual(len(mail.outbox), 0)
