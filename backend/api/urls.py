from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.event_list, name='event_list'),
    path('events/<int:id>/', views.event_detail, name='event_detail'),
    path('book/', views.book_event, name='book_event'),
]
