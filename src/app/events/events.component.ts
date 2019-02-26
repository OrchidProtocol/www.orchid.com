import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";

import {CalEvent} from "./event";
import {EventsService} from "./events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
  events$: Observable<CalEvent[]>;

  constructor(private events: EventsService) {}

  ngOnInit() { this.events$ = this.events.getEvents(); }
}
