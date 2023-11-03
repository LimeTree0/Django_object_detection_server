# cctv/consumers.py
import json
import collections
import time

from channels.generic.websocket import WebsocketConsumer
from . import camera
from .models import ObjectDetection


# websocket 연결부터 종료까지 수행할 일이 담긴 클래스
class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.video_camera = camera.VideoCamera()
        print(self.scope)

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        detect_time = ""
        labels = ""

        # 무제한 전송을 막기 위해 연결 시간 설정(frame 단위로 설정함)
        # 무제한 전송시 연결이 끊겼다가 다시 들어오면 연결이 안되는 상황을 막기 위함임
        for i in range(100):
            # 카메라로부터 프레임과 탐지 객체 받아오기
            frame, labels = self.video_camera.get_frame()
            #탐지 시간
            detect_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))
            # 탐지 객체 개수 카운트 및 json 파이 전송
            labels = dict(collections.Counter(labels))
            labels = json.dumps(labels)
            self.send(text_data=json.dumps({
                                "message": labels,
                                "detect_time": detect_time,
                                "frame": frame}))
            print("전송")

        # 탐지 내용 DB에 저장
        objectDectection = ObjectDetection()
        objectDectection.time = detect_time
        objectDectection.log = labels
        objectDectection.location = "서울"
        objectDectection.save()
        print("DB 저장")

