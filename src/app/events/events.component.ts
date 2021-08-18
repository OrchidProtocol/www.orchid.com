import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MetaService } from '../MetaService';

import { CalEvent } from "./event";
import { EventsService } from "./events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
  events$: Observable<CalEvent[]>;

  constructor(private events: EventsService, private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Blockchain Industry Events | Orchid');
    this.meta.setGlobalDescription('Come and meet the Orchid community in real life by attending one of our blockchain and crypto industry events around the globe.');

    this.events$ = this.events.getEvents();
  }
}
