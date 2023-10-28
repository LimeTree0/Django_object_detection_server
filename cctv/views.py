from django.shortcuts import render
from .models import ObjectDetection
from django.core import serializers

# Create your views here.

def index(request):
    return render(request, "cctv/index.html")


def cctv(request):
    return render(request, "cctv/cctv.html")


def room(request, room_name):
    return render(request, "cctv/cctv/room.html", {"room_name": room_name})


def statistics(request):
    loglist = serializers.serialize("json", ObjectDetection.objects.all())
    context = {
        "loglist" : loglist
    }
    return render(request, "cctv/statistics.html", context)