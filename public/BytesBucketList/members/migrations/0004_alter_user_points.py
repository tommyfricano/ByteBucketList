# Generated by Django 4.1.6 on 2023-02-04 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_user_points'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='points',
            field=models.IntegerField(max_length=255),
        ),
    ]