import { Component, OnInit } from '@angular/core';
import { CalEvent } from '../events/event';
import { EventsService } from '../events/events.service';
import { Observable } from 'rxjs';

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

  downloadWhitepaper() {
    let whitepaper = "";

    if (window && "location" in window && "protocol" in window.location && "pathname" in window.location && "host" in window.location) {
      whitepaper = window.location.protocol + "//" + window.location.host + "/assets/whitepaper/whitepaper.pdf";
    } else {
      whitepaper = "https://github.com/orchidsource/whitepaper";
    }

    console.log("Here's the whitepaper: ", whitepaper);
    window.location.href = whitepaper;
  }
}
