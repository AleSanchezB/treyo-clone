from django.urls import path
from . import views

urlpatterns = [
    path('', views.login),
    path('/', views.login),
    path('register/', views.register),  # Ruta de registro
    path('login/', views.login),  # Ruta de login
    path('items/<int:item_id>/', views.read_item),  # Ruta con parámetro item_id
]
