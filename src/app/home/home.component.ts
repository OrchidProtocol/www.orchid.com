import { Component, OnInit } from '@angular/core';
import { CalEvent } from '../events/event';
import { EventsService } from '../events/events.service';
import { Observable } from 'rxjs';
import { downloadWhitepaper } from '../whitepaper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  events$: Observable<CalEvent[]>;

  constructor(private events: EventsService) { }

  ngOnInit() {
    this.events$ = this.events.getEvents();
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
