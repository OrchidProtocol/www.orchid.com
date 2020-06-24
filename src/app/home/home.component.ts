import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { CalEvent } from '../events/event';
import { EventsService } from '../events/events.service';
import { Observable } from 'rxjs';
import { downloadWhitepaper, downloadOrchid } from '../whitepaper';
import { MetaService } from '../MetaService';
import { OrchidDappService } from '../orchid-dapp.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  events$: Observable<CalEvent[]>;
  hasWeb3Browser: boolean;
  hasFundsAvailable: boolean;
  hasAccountConfigured: boolean;

  constructor(
    private events: EventsService,
    private meta: MetaService,
    private orchidDappService: OrchidDappService,
    @Inject(LOCALE_ID) protected localeId: string,
    private http: HttpClient,
  ) { }

  ngOnInit() {

    /*if (typeof fetch !== 'undefined') {
      fetch("https://blog.orchid.com/rss.xml", { mode: 'no-cors' })
        .then(response => response.text())
        .then(response => {
          console.log(response);
        })
        .catch(console.error)
    } else {
      this.http.get("https://blog.orchid.com/rss.xml")
        .subscribe(response => {
          console.log(response)
        })
    }*/

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
    this.initOrchidDapp();
  }

  downloadWhitepaper() { downloadWhitepaper(); }
  downloadOrchid() { downloadOrchid(); }
  downloadNewsletter() { document.getElementById("newsletter-signup").scrollIntoView(); }

  initOrchidDapp() {
    this.orchidDappService.hasWeb3Browser().subscribe(
      hasWeb3Browser => this.hasWeb3Browser = hasWeb3Browser
    );
    this.orchidDappService.hasFundsAvailable().subscribe(
      hasFundsAvailable => this.hasFundsAvailable = hasFundsAvailable
    );
    this.orchidDappService.hasAccountConfigured().subscribe(
      hasAccountConfigured => this.hasAccountConfigured = hasAccountConfigured
    );
  }
}
