import cv2
import threading
import base64
from ultralytics import YOLO
import supervision as sv
import pafy

# 객체 탐지 및 카메라 설정 관련 코드
class VideoCamera(object):
    def __init__(self, src = 0):  #src: 카메라 주소 "rtsp://172.30.1.6:8080/h264.sdp"
        # 카메라 선택(ip 주소를 넣을 수도 있음)

        # 유튜브 영상 사용시
        # video = pafy.new(src)
        # best = video.getbestvideo(preftype='webm')
        # src = best.url
        self.video = cv2.VideoCapture(src)
        (self.grabbed, self.frame) = self.video.read()

        # 모델 선택
        self.model_object = YOLO("best.pt")
        self.model_object.to('cuda')
        self.model_accident = YOLO("accident.pt")
        self.model_accident.to('cuda')

        # 이미지에 나타낼 바운딩 박스 설정
        self.box_annotator = sv.BoxAnnotator(
            thickness=2,
            text_thickness=2,
            text_scale=1
        )

        threading.Thread(target=self.update, args=()).start()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        frame = self.frame
        # 객체 탐지 및 결과 생성
        result_object = self.model_object(frame)[0]
        detections_object = sv.Detections.from_yolov8(result_object)
        result_accident = self.model_accident(frame)[0]
        detections_accident = sv.Detections.from_yolov8(result_accident)

        # 탐지 객체 라벨(객체 이름, 신뢰도)
        labels_object = [
            f"{self.model_object.model.names[class_id]}"
            for _, _, _, class_id, _
            in detections_object
        ]

        labels_accident = [
            f"{self.model_accident.model.names[class_id]}"
            for _, _, _, class_id, _
            in detections_accident
        ]

        # 탐지 객체 로그
        # print("[camera.py log_object]", "detected: ", labels_object)
        # print("[camera.py log_accident]",  "detected: " ,labels_accident)

        # 이미지에 바운딩 박스 생성
        frame = self.box_annotator.annotate(scene=frame, detections=detections_object, labels=labels_object)

        _, jpeg = cv2.imencode('.jpg', frame)
        frame = base64.b64encode(jpeg).decode('utf-8')
        # labels = ' '.join(str(s) for s in labels) # labels를 문자열로 바꿔줌(테스트용)
        return frame, labels_object, labels_accident
        # return jpeg.tobytes()

    def update(self):
        while True:
            (self.grabbed, self.frame) = self.video.read()

    def close(self):
        self.video.release()
        print("비디오 종료")