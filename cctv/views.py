from django.shortcuts import render, redirect
from django.http import HttpResponse
from cctv.models import ObjectDetection
from django.core import serializers
import json
from rest_framework.response import Response

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


def date(request):
    loglist = serializers.serialize("json", ObjectDetection.objects.all())
    datelog = serializers.serialize("json", ObjectDetection.objects.filter(time__range=[request.GET['dateFrom'], request.GET['dateTo']]))
    context = {
        "loglist": loglist,
        "datelog": datelog
    }
    # return JsonResponse(context)
    return render(request, "cctv/statistics.html", context)

def dateDetail(request):
    loglist = serializers.serialize("json", ObjectDetection.objects.all())
    datelog = serializers.serialize("json", ObjectDetection.objects.filter(time__range=[request.GET['dateFrom'], request.GET['dateTo']]))
    context = {
        "loglist": loglist,
        "datelog": datelog
    }

    print(datelog)

    return HttpResponse(json.dumps(datelog))
    # return render(request, "cctv/statistics.html", context)