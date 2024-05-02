from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Event, Booking
import json

# Create your views here.

def event_list(request):
    events = Event.objects.all()
    data = [{'id': event.id, 'title': event.title, 'description': event.description, 'start_datetime': event.start_datetime,
             'location': event.location, 'seats_available': event.seats_available, 'image': event.image} for event in events]
    return JsonResponse(data, safe=False)

def event_detail(request, id):
    event = get_object_or_404(Event, pk=id)
    data = event.to_dict()
    return JsonResponse(data)

@csrf_exempt
def book_event(request):
    if request.method == 'POST':
        try:
            request_body = request.body.decode('utf-8')
            data = json.loads(request_body)
            event_id = data.get('event_id')
            num_tickets = data.get('num_tickets')

            event = Event.objects.get(pk=event_id)

            if event.seats_available >= int(num_tickets):
                booking = Booking(event=event, num_tickets=num_tickets)
                booking.save()
                event.seats_available -= int(num_tickets)
                event.save()
                return JsonResponse({'success': True, 'message': 'Бронирование успешно завершено'})
            else:
                return JsonResponse({'success': False, 'message': 'Недостаточно мест'})
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)})

    return JsonResponse({'success': False, 'message': 'Метод не поддерживается'})

