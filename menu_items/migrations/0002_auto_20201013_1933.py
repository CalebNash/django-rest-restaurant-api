# Generated by Django 3.1.2 on 2020-10-13 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu_items', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='price',
            field=models.FloatField(),
        ),
    ]
