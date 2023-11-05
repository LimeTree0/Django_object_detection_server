# cctv/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("cctv/", views.cctv, name="cctv"),
    path("cctv/room/", views.room, name="room"),
    path("statistics/", views.statistics, name="statistics"),
    path("statistics/date", views.date, name="date"),
    path("statistics/dateDetail", views.dateDetail, name="dateDetail"),
]
