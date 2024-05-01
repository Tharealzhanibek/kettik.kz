import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../events.service';
import { DatePipe } from '@angular/common';
import { BookRequest } from '../Templates';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any;
  formData: BookRequest;

  constructor(private route: ActivatedRoute, private eventService: EventService, private datePipe: DatePipe){
    this.event = {} as any;
    this.formData = {} as BookRequest;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
  }

  formatTime(dateString: string): string {
    const formattedTime = this.datePipe.transform(dateString, 'HH:mm');
    return formattedTime ? formattedTime : '';
}

onSubmit(): void {
  this.formData.event_id = this.event.id
  this.eventService.bookEvent(this.formData).subscribe(response => {
  alert(response.message)
  });
}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.eventService.getEvent(id).subscribe((event) => {
        this.event = event;
      });
    })
  }
}
