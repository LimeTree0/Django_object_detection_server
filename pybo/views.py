import threading

import cv2
from django.http import StreamingHttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.views.decorators import gzip
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Question
from .serializers import QuestionSerializer

from ultralytics import YOLO


# Create your views here.
def index(request):
    question_list = Question.objects.order_by('-create_date')
    context = {'question_list': question_list}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    # question = Question.objects.get(id=question_id)
    question = get_object_or_404(Question, pk=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)


def answer_create(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    question.answer_set.create(content=request.POST.get('content'), create_date=timezone.now())
    return redirect('pybo:detail', question_id=question_id)


class QuestionListAPI(APIView):
    def get(self, request):
        queryset = Question.objects.all()
        print(queryset)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)


# 카메라 관련 클래스
class VideoCamera(object):
    model = YOLO("yolov8s.pt")

    def __init__(self):
        self.video = cv2.VideoCapture("rtsp://172.30.1.58:8080/h264.sdp")
        (self.grabbed, self.frame) = self.video.read()
        threading.Thread(target=self.update, args=()).start()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        image = self.frame
        _, jpeg = cv2.imencode('.jpg', image)
        print(self.model(image))
        return jpeg.tobytes()

    def update(self):
        while True:
            (self.grabbed, self.frame) = self.video.read()


def gen(camera):
    while True:
        frame = camera.get_frame()

        # frame단위로 이미지를 계속 반환한다. (yield)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


# detectme를 띄우는 코드(여기서 웹캠을 킨다.)
@gzip.gzip_page
def detected(request):
    try:
        cam = VideoCamera()  # 웹캠 호출
        # frame단위로 이미지를 계속 송출한다
        return StreamingHttpResponse(gen(cam), content_type="multipart/x-mixed-replace;boundary=frame")
    except:  # This is bad! replace it with proper handling
        print("에러입니다...")
        pass


def home(request):
    return render(request, "pybo/home.html")  # home.html을 호출해서 띄워준다.
