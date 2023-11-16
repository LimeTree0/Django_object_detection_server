#CCTV 페이지 VIEW 파일
#CCTV 어플리케이션 페이지 컨트롤러

from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login')
    return render(request, "cctv/index.html")


def cctv(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login')
    return render(request, "cctv/cctv.html")


def room(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login')
    cctvName = request.GET.get('name', None)
    return render(request, "cctv/cctv/room.html", {"room_name": cctvName})


def statistics(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login')
    return render(request, "cctv/statistics.html")


def date(request):
    loglist = serializers.serialize("json", ObjectDetection.objects.all())
    datelog = serializers.serialize("json", ObjectDetection.objects.filter(time__range=[request.GET['dateFrom'], request.GET['dateTo']]))
    context = {
        "loglist": loglist,
        "datelog": datelog
    }
    # return JsonResponse(context)
    return render(request, "cctv/statistics.html", context)