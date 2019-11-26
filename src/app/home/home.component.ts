import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
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

  constructor(private events: EventsService, private meta: MetaService, @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {

    this.meta.setGlobalTitle('Orchid | Open Source VPN & Privacy Software');
    this.meta.setGlobalDescription('Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services.');
    this.meta.update('og:url', 'https://www.orchid.com/');

    switch (this.localeId) {
      case 'ko': 
        // define locale specific meta tags here 
      break;
      case 'ja': 
        // define locale specific meta tags here 
      break;
      case 'zh': 
        // define locale specific meta tags here 
      break;
    }
    
    
    this.events$ = this.events.getEvents();
  }

  downloadWhitepaper() { downloadWhitepaper(); }
  downloadOrchid() { downloadOrchid(); }
    downloadNewsletter() { document.getElementById("newsletter-signup").scrollIntoView(); }
}
