from django.urls import path
from .views import ExperienceAPIView

urlpatterns = [
    path("experience/", ExperienceAPIView.as_view(), name="experience"),
]