# cctv/consumers.py
import json

from channels.generic.websocket import WebsocketConsumer
from . import camera
from .models import ObjectDetection


# websocket 연결부터 종료까지 수행할 일이 담긴 클래스
class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.video_camera = camera.VideoCamera()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        # 무제한 전송을 막기 위해 연결 시간 설정(frame 단위로 설정함)
        # 무제한 전송시 연결이 끊겼다가 다시 들어오면 연결이 안되는 상황을 막기 위함임
        for i in range(100):
            frame, labels = self.video_camera.get_frame()
            self.send(text_data=json.dumps({"message": labels,"frame": frame}))
            objectDectection = ObjectDetection();
            objectDectection.log = labels
            objectDectection.save()
            print("전송")
