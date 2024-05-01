from django.contrib import admin
from .models import Event, Booking

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_datetime', 'location', 'seats_available', 'saw_count')
    search_fields = ('title', 'description', 'location', 'genre')
    list_filter = ('start_datetime', 'genre')

admin.site.register(Booking)