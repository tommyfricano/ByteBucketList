from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_list, name='user-list'),
    path('create/', views.create_user, name='create-user'),
    path('retrieve/', views.retrieve, name = 'retrieve'),
]