from django.urls import include, path
from rest_framework import routers
from . import views
from members.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]