from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, "cctv/index.html")


def cctv(request):
    return render(request, "cctv/cctv.html")


def room(request, room_name):
    return render(request, "cctv/cctv/room.html", {"room_name": room_name})
