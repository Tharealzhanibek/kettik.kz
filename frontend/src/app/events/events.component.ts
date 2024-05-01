import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[];
  newEvent: Event;
  constructor(private eventService: EventService, private datePipe: DatePipe) {
    this.events = [];
    this.newEvent = {} as Event;
  }

  getAlbums() {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events.map(event => {
        return {
          ...event,
          start_datetime: this.formatDate(event.start_datetime)
        };
      });
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}