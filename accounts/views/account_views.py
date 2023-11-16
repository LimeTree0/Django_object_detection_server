from django.shortcuts import render
from django.contrib import auth
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import  User
from django.shortcuts import render, redirect

# Create your views here.
# 회원가입
def signup(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1'],
                email=request.POST['email'])
            auth.login(request, user)
            return redirect('/')
        return render(request, 'signup.html')
    return render(request, 'signup.html')

# 로그인
def login(request):
    if request.method == 'POST':
        username = request.POST['id']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password) # 사용자가 입력한 정보가 올바른지 확인
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            return render(request, 'login.html', {'error' : '유저이름 또는 비밀번호가 잘못됬습니다'})
    else:
        return render(request, 'login.html')

#로그아웃
def logout(request):
    auth.logout(request)
    return redirect('/accounts/login')

def manage(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login')

    return render(request, 'manage.html')