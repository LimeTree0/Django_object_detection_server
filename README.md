# Django_object_detection_server
Django를 이용한 object detection 서버입니다

# 개발환경
1. Django
2. pycharm 2023.1
3. yolov8
4. python 3.11.4(3.10.x 버전으로 맞추어도 괜찮음)


# 사용법
GPU를 사용하기 떄문에 CUDA 관련 설정이 완료되어 있어야 한다.(CPU를 사용할 경우 속도가 느려짐 사용할 경우 별도 설정해야 함)

다운로드받아야 할 라이브러리는 다음과 같다.
1. ultralytics 8.0.181
2. supervision 0.14.0 
3. pytorch 2.0.0+cu118 외 기타 라이브러리
4. Django
5. opencv_python

아래 pytorch 페이지에서 cuda 버전에 맞게 라이브러리를 다운 받는다.

아래 명령은 현재 개발에 사용된 버전을 다운로드 받는 명령어이다.

홈페이지: https://pytorch.org/get-started/previous-versions/
```angular2html
    pip install torch==2.0.0+cu118 torchvision==0.15.1+cu118 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu118
```

<br>

다음으로 ultralytics를 다음 명령어를 통해 다운로드 받는다. 현재 버전은 8.0.181이며 버전에 따라 호환이 안될 수도 있다.

홈페이지: https://docs.ultralytics.com/quickstart/#install-ultralytics

```angular2html
    pip install ultralytics
```
<br>

다음으로 supervision을 다음 명령어를 통해 다운로드 받는다. 현재 버전은 0.14.0이며 버전에 따라 호환이 안될 수도 있다.

홈페이지: https://supervision.roboflow.com/

```angular2html
    pip install supervision
```

opencv 다운로드

```angular2html
    pip install opencv_python
```

django 다운로드
```angular2html
    pip install django
```

# 실행방법

프로젝트의 루트 폴더(Django_object_detection_server)에서 다음 명령어를 입력한다.
```angular2html
    python manage.py runserver
```

주소 창에 다음과 같이 입력한다.
```angular2html
    http://127.0.0.1:8000/pybo/
```