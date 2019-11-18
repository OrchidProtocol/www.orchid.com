import { Component, OnInit } from '@angular/core';
import { CalEvent } from '../events/event';
import { EventsService } from '../events/events.service';
import { Observable } from 'rxjs';
import { downloadWhitepaper, downloadOrchid } from '../whitepaper';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  events$: Observable<CalEvent[]>;

  constructor(private events: EventsService, private meta: MetaService) { }

  ngOnInit() {
    this.meta.update('og:url', 'https://www.orchid.com/');
    
    this.events$ = this.events.getEvents();
  }

  downloadWhitepaper() { downloadWhitepaper(); }
  downloadOrchid() { downloadOrchid(); }
    downloadNewsletter() { document.getElementById("newsletter-signup").scrollIntoView(); }
}
