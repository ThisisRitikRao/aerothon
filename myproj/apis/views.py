from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

from .models import AircraftPart
from .serializers import AircraftPartSerializer



# GET request for all the data
@api_view(['GET'])
def get_all_parts(request):
    parts = AircraftPart.objects.all()
    serializer = AircraftPartSerializer(parts, many=True)
    return Response(serializer.data)


# GET request for each part with unique id
@api_view(['GET'])
def get_part_by_id(request, part_id):
    try:
        part = AircraftPart.objects.get(id=part_id)
        serializer = AircraftPartSerializer(part)
        return Response(serializer.data)
    except AircraftPart.DoesNotExist:
        return Response(status=404, data={'message': 'Part not found'})
    



###########  Reading *CSV* data from HTTP header and updating database  ###########
import csv
from io import TextIOWrapper
from django.http import HttpResponseBadRequest

@api_view(['GET'])
def update_database_from_csv(request):
    if request.method == 'GET':
        csv_file = request.FILES.get('csv_file')
        if csv_file:
            try:
                # Decode the CSV file
                csv_data = TextIOWrapper(csv_file.file, encoding='utf-8')
                reader = csv.DictReader(csv_data)
                
                # Process each row in the CSV file
                for row in reader:
                    # Access data using row['column_name']
                    # Create or update your AircraftPart objects accordingly
                    aircraft_part, created = AircraftPart.objects.get_or_create(id=row['id'])
                    aircraft_part.name = row['name']
                    aircraft_part.description = row['description']
                    aircraft_part.save()
                
                return Response('CSV data successfully updated in the database')
            except csv.Error:
                return Response(status=400, data='Invalid CSV file')
        else:
            return Response(status=400, data='No CSV file found in the request')
    else:
        return Response(status=400, data='Invalid request method')
