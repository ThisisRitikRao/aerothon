from django.shortcuts import render


import mysql.connector
from django.http import JsonResponse

def get_all_part_data(request):
    # Establish a connection to the database
    cnx = mysql.connector.connect(user='root', password='Adikes209.',
                                  host='localhost', database='Aircraft_Components')

    cursor = cnx.cursor()

    # Execute the SQL query to fetch all data from the table
    query = "SELECT * FROM aircraft_parts_data"
    cursor.execute(query)

    # Fetch all rows from the result set
    rows = cursor.fetchall()

    # Close the database connection
    cursor.close()
    cnx.close()

    # Convert the rows to a list of dictionaries
    results = []
    for row in rows:
        result = {
            'id': row[0],
            'Part_Name': row[1],
            'Material_Composition': row[2],
            # Include other fields from the table
            # ...
        }
        results.append(result)

    # Return the data as JSON response
    return JsonResponse(results, safe=False)




def get_part_by_id(request, part_id):
    try:
        # Establish a connection to the database
        cnx = mysql.connector.connect(user='root', password='Adikes209.',
                                  host='localhost', database='Aircraft_Components')

        cursor = cnx.cursor()

        # Execute the SQL query to fetch data for the specific ID
        query = "SELECT * FROM aircraft_parts_data WHERE id = %s"
        cursor.execute(query, (part_id,))

        # Fetch the row from the result set
        row = cursor.fetchone()

        # Close the database connection
        cursor.close()
        cnx.close()

        if row:
            result = {
                'id': row[0],
                'Part_Name': row[1],
                'Material_Composition': row[2],
                # Include other fields from the table
                # ...
            }
            return JsonResponse(result)
        else:
            return JsonResponse({'message': 'Part not found'}, status=404)
    except mysql.connector.Error as e:
        # Handle any potential database errors
        return JsonResponse({'message': 'Database error'}, status=500)




###------------------------------- Data injection -------------------------------------###

# Create a buffer list to store rows
buffer = []

def insert_data(request):
    # Get data from the request parameters
    id = request.GET.get('id')
    part_name = request.GET.get('Part_Name')
    Material_Composition = request.GET.get('Material_Composition')
    Age_years = request.GET.get('Age_years')
    Condition = request.GET.get('Condition')
    Location = request.GET.get('Location')
    Manufacturer = request.GET.get('Manufacturer')
    Aircraft_Model = request.GET.get('Aircraft_Model')
    Potential_Use_Cases = request.GET.get('Potential_Use_Cases')
    New_Parts_Carbon_Footprint_kg_CO2e = request.GET.get('New_Parts_Carbon_Footprint_kg_CO2e')
    Recycled_Parts_Carbon_Footprint_kg_CO2e = request.GET.get('Recycled_Parts_Carbon_Footprint_kg_CO2e')
    water_usage_new_parts_liters = request.GET.get('water_usage_new_parts_liters')
    water_usage_recycled_parts_liters = request.GET.get('water_usage_recycled_parts_liters')
    landfill_waste_new_parts_kg = request.GET.get('landfill_waste_new_parts_kg')
    landfill_waste_recycled_parts_kg = request.GET.get('landfill_waste_recycled_parts_kg')
    energy_consumption_new_parts_kwh = request.GET.get('energy_consumption_new_parts_kwh')
    energy_consumption_recycled_parts_kwh = request.GET.get('energy_consumption_recycled_parts_kwh')
    recycling_rate_percent = request.GET.get('recycling_rate_percent')
    toxicity_score_new_parts = request.GET.get('toxicity_score_new_parts')
    toxicity_score_recycled_parts = request.GET.get('toxicity_score_recycled_parts')
    remanufacturing_potential = request.GET.get('remanufacturing_potential')
    life_cycle_assessment = request.GET.get('life_cycle_assessment')
    renewable_material_content_percent = request.GET.get('renewable_material_content_percent')
    carbon_footprint_saved_kg_co2e = request.GET.get('carbon_footprint_saved_kg_co2e')
    water_usage_saved_liters = request.GET.get('water_usage_saved_liters')
    landfill_waste_saved_kg = request.GET.get('landfill_waste_saved_kg')
    energy_consumption_saved_kwh = request.GET.get('energy_consumption_saved_kwh')
    toxicity_score_difference = request.GET.get('toxicity_score_difference')
    remanufacturing_potential_percent = request.GET.get('remanufacturing_potential_percent')
    life_cycle_assessment_score = request.GET.get('life_cycle_assessment_score')
    # Include other fields based on your requirements -- Done

    print("Got Data from GET Request")

    # Perform basic checks on the data
    if id and part_name and Material_Composition and Age_years and Condition and Location and Manufacturer and Aircraft_Model and Potential_Use_Cases and New_Parts_Carbon_Footprint_kg_CO2e and Recycled_Parts_Carbon_Footprint_kg_CO2e and water_usage_new_parts_liters and water_usage_recycled_parts_liters and landfill_waste_new_parts_kg and landfill_waste_recycled_parts_kg and energy_consumption_new_parts_kwh and energy_consumption_recycled_parts_kwh and recycling_rate_percent and toxicity_score_new_parts and toxicity_score_recycled_parts and remanufacturing_potential and life_cycle_assessment and renewable_material_content_percent and carbon_footprint_saved_kg_co2e and water_usage_saved_liters and landfill_waste_saved_kg and energy_consumption_saved_kwh and toxicity_score_difference and remanufacturing_potential_percent and life_cycle_assessment_score :
        # Create a dictionary for the row data
        row = {
            'id': id,
            'Part_Name': part_name,
            'Material_Composition': Material_Composition,
            'Age_years': Age_years,
            'Condition': Condition,
            'Location': Location,
            'Manufacturer': Manufacturer,
            'Aircraft_Model': Aircraft_Model,
            'Potential_Use_Cases': Potential_Use_Cases,
            'New_Parts_Carbon_Footprint_kg_CO2e': New_Parts_Carbon_Footprint_kg_CO2e,
            'Recycled_Parts_Carbon_Footprint_kg_CO2e' : Recycled_Parts_Carbon_Footprint_kg_CO2e,
            'water_usage_new_parts_liters': water_usage_new_parts_liters,
            'water_usage_recycled_parts_liters': water_usage_recycled_parts_liters,
            'landfill_waste_new_parts_kg': landfill_waste_new_parts_kg,
            'landfill_waste_recycled_parts_kg': landfill_waste_recycled_parts_kg,
            'energy_consumption_new_parts_kwh': energy_consumption_new_parts_kwh,   
            'energy_consumption_recycled_parts_kwh': energy_consumption_recycled_parts_kwh,
            'recycling_rate_percent': recycling_rate_percent,
            'toxicity_score_new_parts': toxicity_score_new_parts,
            'toxicity_score_recycled_parts': toxicity_score_recycled_parts,
            'remanufacturing_potential': remanufacturing_potential,
            'life_cycle_assessment': life_cycle_assessment,
            'renewable_material_content_percent': renewable_material_content_percent,
            'carbon_footprint_saved_kg_co2e': carbon_footprint_saved_kg_co2e,
            'water_usage_saved_liters': water_usage_saved_liters,
            'landfill_waste_saved_kg': landfill_waste_saved_kg,
            'energy_consumption_saved_kwh': energy_consumption_saved_kwh,
            'toxicity_score_difference': toxicity_score_difference,
            'remanufacturing_potential_percent': remanufacturing_potential_percent,
            'life_cycle_assessment_score': life_cycle_assessment_score,
        }

        #     # Append the row to the buffer
        buffer.append(row)


        # Check if buffer length reaches 20
        if len(buffer) >= 20:
            # If buffer length reaches 20 or more, insert the rows into the table
            try:
                # Establish a connection to the database
                cnx = mysql.connector.connect(user='root', password='Adikes209.',
                                        host='localhost', database='Aircraft_Components')
                print("Connection to the database established")

                cursor = cnx.cursor()


                for row in buffer:
                    # insert_query = "INSERT INTO aircraft_parts_data (id, `Part Name`,  `Material Composition`, `Age (years)`, Condition, Location, Manufacturer, `Aircraft Model`, `Potential Use Cases', 'New Parts Carbon Footprint (kg CO2e)', `Recycled Parts Carbon Footprint (kg CO2e)`, `Water Usage - New Parts (liters)`, `Water Usage - Recycled Parts (liters)`, `Landfill Waste - New Parts (kg)`, `Landfill Waste - Recycled Parts (kg)`, `Energy Consumption - New Parts (kWh)`, `Energy Consumption - Recycled Parts (kWh)`, `Recycling Rate (%)`, `Toxicity Score - New Parts`, `Toxicity Score - Recycled Parts`, `Remanufacturing Potential`, `Life Cycle Assessment`, `Renewable Material Content (%)`, `Carbon Footprint Saved (kg CO2e)`, `Water Usage Saved (liters)`, `Landfill Waste Saved (kg)`, `Energy Consumption Saved (kWh)`, `Toxicity Score Difference`, `Remanufacturing Potential (%)`, `Life Cycle Assessment Score`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

                    insert_query = "INSERT INTO aircraft_parts_data (id, `Part Name`, `Material Composition`, `Age (years)`, `Condition`, Location, Manufacturer, `Aircraft Model`, `Potential Use Cases`, `New Parts Carbon Footprint (kg CO2e)`, `Recycled Parts Carbon Footprint (kg CO2e)`, `Water Usage - New Parts (liters)`, `Water Usage - Recycled Parts (liters)`, `Landfill Waste - New Parts (kg)`, `Landfill Waste - Recycled Parts (kg)`, `Energy Consumption - New Parts (kWh)`, `Energy Consumption - Recycled Parts (kWh)`, `Recycling Rate (%)`, `Toxicity Score - New Parts`, `Toxicity Score - Recycled Parts`, `Remanufacturing Potential`, `Life Cycle Assessment`, `Renewable Material Content (%)`, `Carbon Footprint Saved (kg CO2e)`, `Water Usage Saved (liters)`, `Landfill Waste Saved (kg)`, `Energy Consumption Saved (kWh)`, `Toxicity Score Difference`, `Remanufacturing Potential (%)`, `Life Cycle Assessment Score`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

                    # Create a list of tuples containing the values for each row in the buffer
                    values = (int(row['id']), row['Part_Name'], row['Material_Composition'], int(row['Age_years']), row['Condition'], row['Location'], row['Manufacturer'], row['Aircraft_Model'], row['Potential_Use_Cases'], int(row['New_Parts_Carbon_Footprint_kg_CO2e']), int(row['Recycled_Parts_Carbon_Footprint_kg_CO2e']), int(row['water_usage_new_parts_liters']), int(row['water_usage_recycled_parts_liters']), int(row['landfill_waste_new_parts_kg']), int(row['landfill_waste_recycled_parts_kg']), int(row['energy_consumption_new_parts_kwh']), int(row['energy_consumption_recycled_parts_kwh']), float(row['recycling_rate_percent']), float(row['toxicity_score_new_parts']), float(row['toxicity_score_recycled_parts']), float(row['remanufacturing_potential']), float(row['life_cycle_assessment']), float(row['renewable_material_content_percent']), int(row['carbon_footprint_saved_kg_co2e']), int(row['water_usage_saved_liters']), int(row['landfill_waste_saved_kg']), int(row['energy_consumption_saved_kwh']), float(row['toxicity_score_difference']), float(row['remanufacturing_potential_percent']), float(row['life_cycle_assessment_score']))

                    print(insert_query)
                    print(values)
                    # Execute the insert     statement
                    cursor.execute(insert_query, values)
                
                print("Execution Done successfully")
                # Commit the changes to the database
                cnx.commit()

                # Clear the buffer after successful insertion
                buffer.clear()

                # Close the database connection
                cursor.close()
                cnx.close()

                return JsonResponse({'message': 'Data inserted successfully'})
            except mysql.connector.Error as e:
                # Handle any potential database errors
                return JsonResponse({'message': 'Database error'}, status=500)
        else:
            return JsonResponse({'message': 'Data added to buffer'})
    else:
        return JsonResponse({'message': 'Invalid data'}, status=400)