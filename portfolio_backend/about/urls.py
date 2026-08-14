from django.urls import path

from .views import AboutListAPIView

urlpatterns = [
    path("about/", AboutListAPIView.as_view(), name="about"),
]
