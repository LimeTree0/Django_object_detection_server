from django.http import HttpResponse
from django.contrib.auth.models import  User
from django.core import serializers
import json
from rest_framework.response import Response

# Create your views here.
# 회원 정보 API
def userList(request):
    # if not request.user.is_authenticated:
    #     return HttpResponse(json.dumps("ACCESS DENIED: UNAUTHORIZED"))
    objects_all = list(User.objects.all().values('username', 'last_name', 'email', 'is_superuser'))

    print(objects_all)
    return HttpResponse(json.dumps(objects_all))