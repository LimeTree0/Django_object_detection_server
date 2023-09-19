from django.urls import path

from . import views

app_name = 'pybo'

urlpatterns = [
    path('', views.home, name='index'),
    path('<int:question_id>/', views.home, name='detail'),
    path('answer/create/<int:question_id>/', views.answer_create, name='answer_create'),
    path('api/', views.QuestionListAPI.as_view(), name='answer_create'),
    path("detectme", views.detected, name="detected"),  # 웹캠 링크
]
