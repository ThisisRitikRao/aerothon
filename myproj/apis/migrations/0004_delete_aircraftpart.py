# Generated by Django 4.2.1 on 2023-05-19 15:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0003_alter_aircraftpart_table'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AircraftPart',
        ),
    ]