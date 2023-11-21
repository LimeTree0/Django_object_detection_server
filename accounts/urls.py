from django.urls import path
from .views import account_views, account_API_views

urlpatterns = [
    path('signup/', account_views.signup, name='signup'),
    path('login/', account_views.login, name='login'),
    path('logout/', account_views.logout, name='logout'),
    path('manage/', account_views.manage, name='manage'),
]