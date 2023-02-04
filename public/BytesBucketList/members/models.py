from django.db import models

class User(models.Model):
  name = models.CharField(max_length=255)
  password = models.CharField(max_length=255)
  latitude = models.DecimalField(max_digits=19, decimal_places=10)
  longitude = models.DecimalField(max_digits=19, decimal_places=10)
  points = models.IntegerField()

