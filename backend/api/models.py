from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=100)
    seats_available = models.IntegerField()
    image = models.TextField()
    phone_number = models.CharField(max_length=20)
    social_media_url = models.TextField()
    genre = models.CharField(max_length=30)
    saw_count = models.IntegerField()    

    def __str__(self):
        return f"Событие - {self.title}"

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'start_datetime': self.start_datetime,
            'location': self.location,
            'seats_available': self.seats_available,
            'image': self.image,
            'phone_number': self.phone_number,
            'social_media_url': self.social_media_url,
            'genre': self.genre,
            'saw_count': self.saw_count,
        }

class Booking(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    num_tickets = models.IntegerField()

    def __str__(self):
        return f"Бронь - {self.event.title}"