from django.db import models

# Create your models here.


class AircraftPart(models.Model):
    id = models.IntegerField(primary_key=True)
    Part_Name = models.TextField()
    Material_Composition = models.TextField()
    Age_years =  models.IntegerField()
    Condition = models.TextField()
    Location = models.TextField()
    Manufacturer = models.TextField()
    Aircraft_Model = models.TextField()
    Potential_Use_Cases = models.TextField()
    New_Parts_Carbon_Footprint_kg_CO2e  = models.IntegerField()
    Recycled_Parts_Carbon_Footprint_kg_CO2e = models.IntegerField()
    water_usage_new_parts_liters = models.IntegerField()
    water_usage_recycled_parts_liters = models.IntegerField()
    landfill_waste_new_parts_kg = models.IntegerField()
    landfill_waste_recycled_parts_kg = models.IntegerField()
    energy_consumption_new_parts_kwh = models.IntegerField()
    energy_consumption_recycled_parts_kwh = models.IntegerField()
    recycling_rate_percent = models.FloatField()
    toxicity_score_new_parts = models.FloatField()
    toxicity_score_recycled_parts = models.FloatField()
    remanufacturing_potential = models.FloatField()
    life_cycle_assessment = models.FloatField()
    renewable_material_content_percent = models.FloatField()
    carbon_footprint_saved_kg_co2e = models.IntegerField()
    water_usage_saved_liters = models.IntegerField()
    landfill_waste_saved_kg = models.IntegerField()
    energy_consumption_saved_kwh = models.IntegerField()
    toxicity_score_difference = models.FloatField()
    remanufacturing_potential_percent = models.FloatField()
    life_cycle_assessment_score = models.FloatField()

    def __str__(self):
        return self.id
    
    # class Meta:
    #     db_table = 'Aircraft_Components'
        # primary_key = 'id'
    
