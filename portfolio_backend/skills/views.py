
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Skill
from .serializers import SkillSerializer


class SkillListAPIView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]