import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { CalEvent } from '../events/event';
import { EventsService } from '../events/events.service';
import { Observable } from 'rxjs';
import { downloadWhitepaper, downloadOrchid } from '../whitepaper';
import { MetaService } from '../MetaService';
import { OrchidDappService } from '../orchid-dapp.service';
import { HttpClient } from "@angular/common/http";

import BlogJSON from "../../assets/blog.json"
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
  blogLink: string;
  blogPosts = [];

  constructor(
    private events: EventsService,
    private meta: MetaService,
    private orchidDappService: OrchidDappService,
    @Inject(LOCALE_ID) protected localeId: string,
    private http: HttpClient,
  ) { }

  ngOnInit() {

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    for (let index = 0; index < Math.min(BlogJSON.length, 6); index++) {
      const element = BlogJSON[index];
      //element.url = `https://blog.${this.localeId}.orchid.com/${element.url}`.replace('.en-US', '');
      const date = new Date(element.date);
      element.date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      this.blogPosts.push(element);
    }
    

    this.meta.setGlobalTitle('Crypto VPN App | Orchid');
    this.meta.setGlobalDescription('Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy.');
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

    this.blogLink = "https://blog.orchid.com/";
    if (this.localeId !== 'en-US') {
      this.blogLink = `https://blog.${this.localeId}.orchid.com/`;
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
