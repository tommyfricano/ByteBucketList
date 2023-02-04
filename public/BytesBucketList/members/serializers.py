from rest_framework import serializers
from members.models import User
from django.db.models import fields

class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = ('id', 'name', 'password', 'latitude', 'longitude', 'points')