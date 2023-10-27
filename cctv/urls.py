# cctv/urls.py
from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("cctv/", views.cctv, name="cctv"),
    path("cctv/<str:room_name>/", views.room, name="room"),
]