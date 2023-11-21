# CCTV API VIEW 파일
# CCTV 탐지 객체 로그에 대한 정보 전송 담당

from django.http import HttpResponse
from cctv.models import ObjectDetection, AccidentDetection
from django.core import serializers
import json
from rest_framework.response import Response

# CCTV 로그 데이터 JSON 반환
def dateDetail(request):
    values = ObjectDetection.objects.filter(time__range=[request.GET['dateFrom'], request.GET['dateTo']])
    datelog = serializers.serialize("json", values)

    # print(datelog)

    return HttpResponse(json.dumps(datelog))

def accedentDetail(request):
    values = AccidentDetection.objects.filter(time__range=[request.GET['dateFrom'], request.GET['dateTo']])
    accidentlog = serializers.serialize("json", values)

    # print(datelog)

    return HttpResponse(json.dumps(accidentlog))