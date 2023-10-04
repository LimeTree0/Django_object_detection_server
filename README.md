# Django_object_detection_server
Django를 이용한 object detection 서버입니다

# 개발환경
1. Django
2. pycharm 2023.1
3. yolov8
4. python 3.11.4(3.10.x 버전으로 맞추어도 괜찮음)


# 사용법
GPU를 사용하기 떄문에 CUDA 관련 설정이 완료되어 있어야 한다.(CPU를 사용할 경우 속도가 느려짐 사용할 경우 별도 설정해야 함)
여기서는 CUDA 버전 11.8을 기준으로 수행한다

모든 명령어는 윈도우 cmd를 기준으로 한다.

test라는 이름으로 가상환경 생성
```angular2html
    python -m venv test
```
<br>

생성된 가상환경 폴더인 test 폴더로 이동
```angular2html
    cd test
```
<br>

가상 환경 실행(윈도우 기준)
```angular2html
    Scripts\activate.bat
```

다운로드받아야 할 라이브러리는 다음과 같다.
1. ultralytics 8.0.181
2. supervision 0.14.0 
3. pytorch 2.0.0+cu118 외 기타 라이브러리
4. Django 4.2.5
5. opencv_python 4.8.1
6. daphne 4.0.0

아래 pytorch 페이지에서 cuda 버전에 맞게 라이브러리를 다운 받는다.

아래 명령은 현재 개발에 사용된 버전을 다운로드 받는 명령어이다.

django 설치
```angular2html
    pip install django
```
<br>

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
<br>

opencv 다운로드
```angular2html
    pip install opencv_python
```
<br>

daphne 다운로드
```angular2html
    pip install daphne
```
<br>

channels 다운로드(이 부분은 오류 해결법1에 자세히 설명한다.)
```
    pip install channels
```

# 실행방법

가상환경을 설정하고 위 라이브러리를 다운받는다.

git clone을 이용해 가상환경이 설정된 위치에 프로젝트를 다운받는다.
```angular2html
    git clone 프로젝트 주소
```
<br>

프로젝트의 루트 폴더(Django_object_detection_server)에서 다음 명령어를 입력한다.
```angular2html
    cd Django_object_detection_server
    python manage.py runserver
```
<br>

주소 창에 다음과 같이 입력한 후 방 번호 입력하고 룸에 접속해 메세지 창에 아무 문자나 입력하면(enter 나 send 클릭) 탐지 실행 멈추면 다시 문자 쓰기
```angular2html
     http://127.0.0.1:8000/chat/
```

# 오류 해결법
오류 해결법 1
channels를 설치하지 않으면 다음 오류가 발생한다.
```
    Cannot import ASGI_APPLICATION module 'Django_object_detection_server.asgi'
```
만약 이렇게 해도 오류가 발생한다면  django shell을 이용해서 문제점을 찾으면 된다.
```
    python django shell
    >>from Django_object_detection_server.routing import application
```
