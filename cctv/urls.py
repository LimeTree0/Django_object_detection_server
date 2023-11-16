# cctv/urls.py
from django.urls import path

from .views import cctv_views, cctv_API_views

urlpatterns = [
    path("", cctv_views.index, name="index"),
    path("cctv/", cctv_views.cctv, name="cctv"),
    path("cctv/room/", cctv_views.room, name="room"),
    path("statistics/", cctv_views.statistics, name="statistics"),
    path("statistics/date", cctv_views.date, name="date"),
    path("statistics/dateDetail", cctv_API_views.dateDetail, name="dateDetail"),
]
