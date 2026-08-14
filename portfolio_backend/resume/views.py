from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Resume
from .serializers import ResumeSerializer


class ResumeAPIView(generics.ListAPIView):
    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Resume.objects.order_by("-updated_at")[:1]