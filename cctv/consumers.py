# cctv/consumers.py
import json
import collections
import time

from channels.generic.websocket import WebsocketConsumer
from . import camera
from .models import ObjectDetection, AccidentDetection, CCTVAdress



# websocket 연결부터 종료까지 수행할 일이 담긴 클래스
class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.cctvNum = self.scope['path'].split('/')[-2]
        cctvAddress = self.getAddress(self.cctvNum)
        self.video_camera = camera.VideoCamera(cctvAddress)

        self.accept()

    def disconnect(self, close_code):
        self.video_camera.close()

    def receive(self, text_data):
        # text_data_json = json.loads(text_data)
        # message = text_data_json["message"]

        detect_time = ""
        labels = ""

        # 무제한 전송을 막기 위해 연결 시간 설정(frame 단위로 설정함)
        # 무제한 전송시 연결이 끊겼다가 다시 들어오면 연결이 안되는 상황을 막기 위함임
        for i in range(100):
            # 카메라로부터 프레임과 탐지 객체 받아오기
            frame, labels_object, labels_accident = self.video_camera.get_frame()
            #탐지 시간
            detect_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))
            # 탐지 객체 개수 카운트 및 json 파이 전송
            labels_object = dict(collections.Counter(labels_object))
            labels_object = json.dumps(labels_object)
            labels_accident = dict(collections.Counter(labels_accident))
            labels_accident = json.dumps(labels_accident)

            self.send(text_data=json.dumps({
                "object_detection": labels_object,
                "accident_detection": labels_accident,
                "detect_time": detect_time,
                "frame": frame}))

            print("전송")

        # # 탐지 내용 DB에 저장
        # # 객체 탐지 내용
        objectDectection = ObjectDetection()
        objectDectection.time = detect_time
        objectDectection.log = labels_object
        objectDectection.location = "서울"
        objectDectection.save()

        accidentDetection = AccidentDetection()
        accidentDetection.time = detect_time
        accidentDetection.log = labels_accident
        accidentDetection.location = "서울"
        accidentDetection.save()
        print("DB 저장")

        self.send(text_data="end")
    def cctvAddressConvert(self, address):
        if(address.isdigit()):
            return int(address)
        else:
            return address


    def getAddress(self, address):
        address = CCTVAdress.objects.get(cctv_num=int(address)).address
        return self.cctvAddressConvert(address)
