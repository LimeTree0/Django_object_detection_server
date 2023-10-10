from django.db import models

# Create your models here.
class ObjectDetection(models.Model):
    log = models.CharField(max_length=100) # 감지 로그
    # time = models.DateTimeField() #감지 시간
    # location = models.CharField(max_length=100) #감지 장소


