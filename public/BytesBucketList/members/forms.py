from django import forms
from django.forms import ModelForm
from .models import User

class UserForm(ModelForm):
    class Meta:
        model = User
        
        fields = ('userName', 'password', 'email', 'latitude', 'longitude', 'points')

        widgets = {
            'userName': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'User Name'}),
            'password': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Password'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Email'}),
            'latitude': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Latitude'}),
            'longitude': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Longitude'}),
        }