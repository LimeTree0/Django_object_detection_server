# cctv/urls.py
from django.urls import path, re_path

from .views import cctv_views, cctv_API_views

urlpatterns = [
    path("", cctv_views.index, name="index"),
    path("cctv/", cctv_views.cctv, name="cctv"),
    re_path("cctv/(?P<room_name>\w+)/$", cctv_views.room, name="room"),
    path("statistics/", cctv_views.statistics, name="statistics"),
    path("statistics/date", cctv_views.date, name="date"),
    path("statistics/dateDetail", cctv_API_views.dateDetail, name="dateDetail"),
    path("statistics/dateFindByDate", cctv_API_views.dateFindByDate, name="dateFindByDate"),
    path("statistics/accedentFindAll", cctv_API_views.accedentFindAll, name="accedentFindAll"),
    path("statistics/accedentFindByDate", cctv_API_views.accedentFindByDate, name="accedentFindByDate"),
]
