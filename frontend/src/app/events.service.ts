import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BookRequest, Event } from "./Templates";

@Injectable({
  providedIn: 'root'
})

export class EventService {
  JSON_URL = `http://localhost:8000`
  constructor(private client: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.client.get<Event[]>(this.JSON_URL);
  }

  getEvent(id: number): Observable<Event> {
    console.log(`${this.JSON_URL}/events/${id}`)
    return this.client.get<Event>(`${this.JSON_URL}/events/${id}`);
  }

  bookEvent(formData: BookRequest): Observable<any> {
    const data = { event_id: formData.event_id, num_tickets: formData.num_tickets };
    console.log(data)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.client.post<any>(`${this.JSON_URL}/book/`, data, { headers });
  }
}