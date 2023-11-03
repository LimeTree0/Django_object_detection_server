from django.shortcuts import render
from .models import ObjectDetection
from django.core import serializers

# Create your views here.

def index(request):
    return render(request, "cctv/index.html")


def cctv(request):
    return render(request, "cctv/cctv.html")


def room(request):
    cctvName = request.GET.get('name', None)
    return render(request, "cctv/cctv/room.html", {"room_name": cctvName})


def statistics(request):
    loglist = serializers.serialize("json", ObjectDetection.objects.all())
    context = {
        "loglist" : loglist
    }
    return render(request, "cctv/statistics.html", context)