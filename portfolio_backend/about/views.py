from rest_framework.generics import ListAPIView

from .models import About
from .serializers import AboutSerializer


class AboutListAPIView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
