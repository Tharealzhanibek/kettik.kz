import requests

# URL-адрес сервера Django для бронирования места
url = 'http://localhost:8000/book/'

# Данные для бронирования места на мероприятии
data = {
    'event_id': 2,  # ID мероприятия, на которое пользователь хочет забронировать место
    'num_tickets': 2  # Количество билетов для бронирования
}

# Отправляем POST-запрос на сервер Django
response = requests.post(url, data=data)

# Печать ответа от сервера Django
print(response.json())
