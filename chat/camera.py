import cv2
import threading
import base64
from ultralytics import YOLO
import supervision as sv

# 객체 탐지 및 카메라 설정 관련 코드
class VideoCamera(object):
    def __init__(self):
        src = 0 #"rtsp://172.30.1.6:8080/h264.sdp"
        self.video = cv2.VideoCapture(src)
        (self.grabbed, self.frame) = self.video.read()

        # 모델 선택
        self.model = YOLO("yolov8s.pt")
        self.model.to('cuda')

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
        result = self.model(frame)[0]
        detections = sv.Detections.from_yolov8(result)

        # 탐지 객체 라벨(객체 이름, 신뢰도)
        labels = [
            f"{self.model.model.names[class_id]} {confidence:0.2f}"
            for _, _, confidence, class_id, _
            in detections
        ]

        # 탐지 객체 로그
        print(type(labels))

        # 이미지에 바운딩 박스 생성
        frame = self.box_annotator.annotate(scene=frame, detections=detections, labels=labels)

        _, jpeg = cv2.imencode('.jpg', frame)
        frame = base64.b64encode(jpeg).decode('utf-8')
        labels = ' '.join(str(s) for s in labels)
        return frame, labels
        # return jpeg.tobytes()

    def update(self):
        while True:
            (self.grabbed, self.frame) = self.video.read()


def gen(camera):
    while True:
        frame = camera.get_frame()
        frame_encoded = base64.b64encode(frame).decode('utf-8')

        image_json = {
            'frame': frame_encoded,
            'log': "this is log",
        }

        # frame단위로 이미지를 계속 반환한다. (yield)
        # yield json.dumps(image_json)

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n'
                                                             # b'--frame\r\n'
                                                             # b'Content-Type: text/plain\r\n\r\n' + "hello".encode() + b'\r\n\r\n'
               )


# detectme를 띄우는 코드(여기서 웹캠을 킨다.)
# @gzip.gzip_page
def detected(request):
    try:
        cam = VideoCamera()  # 웹캠 호출
        # frame단위로 이미지를 계속 송출한다
        # #
        # return StreamingHttpResponse(gen(cam), content_type="application/json")
        return StreamingHttpResponse(gen(cam), content_type="multipart/x-mixed-replace;boundary=frame")
    except:  # This is bad! replace it with proper handling
        print("에러입니다...")
        pass
