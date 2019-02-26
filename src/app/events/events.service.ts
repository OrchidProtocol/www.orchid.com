import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";

import {CalendarApiConfig} from "../calendar-api-config";

import {CalEvent} from "./event";

@Injectable({providedIn: "root"})
export class EventsService {
  eventList: Observable<CalEvent[]> = null;

  constructor() {}

  private printMonth(date: Date): string {
    return date.toLocaleString([], {month: "long"});
  }

  getEvents(): Observable<CalEvent[]> {
    if (!this.eventList) {
      this.eventList =
          ajax
              .getJSON(`https://www.googleapis.com/calendar/v3/calendars/${
                  encodeURIComponent(CalendarApiConfig.CAL_ID)}/events?key=${
                  encodeURIComponent(CalendarApiConfig.API_KEY)}&timeMin=${
                  new Date().toISOString()}&timeMax=${
                  new Date(+new Date() + 86400000 * 90).toISOString()}`)
              .pipe(map(e => (e["items"] as any[]).map(i => {
                let start = new Date(i["start"]["date"]);
                let end   = new Date(i["end"]["date"]);
                end       = new Date(+end - 1);

                let dateStr = "ERR";

                if (start.getUTCFullYear() != end.getUTCFullYear() ||
                    start.getUTCMonth() != end.getUTCMonth()) {
                  dateStr = `${start.getUTCDate()} ${
                      this.printMonth(start)}\u2013${end.getUTCDate()} ${
                      this.printMonth(end)}`;
                }
                else if (start.getUTCMonth() != end.getUTCMonth() ||
                         start.getUTCDate() != end.getUTCDate()) {
                  dateStr = `${start.getUTCDate()}\u2013${end.getUTCDate()} ${
                      this.printMonth(start)}`;
                }
                else {
                  dateStr = `${start.getUTCDate()} ${this.printMonth(start)}`;
                }

                return {
                  date: dateStr,
                  title: i["summary"],
                  location: i["location"],
                  desc: i["description"],
                };
              })));
    }

    return this.eventList;
  }
}
