from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

from .models import AircraftPart
from .serializers import AircraftPartSerializer

@api_view(['GET'])
def get_all_parts(request):
    parts = AircraftPart.objects.all()
    serializer = AircraftPartSerializer(parts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_part_by_id(request, part_id):
    try:
        part = AircraftPart.objects.get(id=part_id)
        serializer = AircraftPartSerializer(part)
        return Response(serializer.data)
    except AircraftPart.DoesNotExist:
        return Response(status=404, data={'message': 'Part not found'})