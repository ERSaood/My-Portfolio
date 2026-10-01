from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Education
from .serializers import EducationSerializer


class EducationAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [AllowAny]