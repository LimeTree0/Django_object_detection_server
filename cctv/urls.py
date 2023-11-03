# cctv/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("cctv/", views.cctv, name="cctv"),
    path("cctv/room/", views.room, name="room"),
    path("statistics/", views.statistics, name="statistics"),
]
