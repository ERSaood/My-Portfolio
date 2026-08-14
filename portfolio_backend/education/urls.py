from django.urls import path
from .views import EducationAPIView

urlpatterns = [
    path("education/", EducationAPIView.as_view(), name="education"),
]