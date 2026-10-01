from django.urls import path
from .views import SkillListAPIView

urlpatterns = [
    path("skills/", SkillListAPIView.as_view(), name="skills"),
]