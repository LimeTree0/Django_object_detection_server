# Generated by Django 4.2.5 on 2023-10-26 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cctv', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objectdetection',
            name='time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]