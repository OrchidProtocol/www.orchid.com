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
                  new Date(+new Date() + 86400000 * 90)
                      .toISOString()}&singleEvents=true&orderBy=startTime`)
              .pipe(map(e => (e["items"] as any[]).map(i => {
                // TODO: display the time for non-all-day events?

                let start = i["start"], end = i["end"];
                start = new Date(start["date"] || start["dateTime"]);
                end   = new Date(end["date"] || end["dateTime"]);
                end   = new Date(+end - 1);

                let dateStr = "ERR";

                // NB: not displaying year numbers because I'm assuming events
                //     won't span more than a month or so
                if (start.getUTCFullYear() != end.getUTCFullYear() ||
                    start.getUTCMonth() != end.getUTCMonth()) {
                  dateStr = `${start.getUTCDate()} ${
                      this.printMonth(start)}\u2013${end.getUTCDate()} ${
                      this.printMonth(end)}`;
                }
                else if (start.getUTCDate() != end.getUTCDate()) {
                  dateStr = `${start.getUTCDate()}\u2013${end.getUTCDate()} ${
                      this.printMonth(start)}`;
                }
                else {
                  dateStr = `${start.getUTCDate()} ${this.printMonth(start)}`;
                }

                let ret: CalEvent = {
                  date: dateStr,
                  title: String(i["summary"]).trim(),
                  location: String(i["location"]).trim(),
                  desc: String(i["description"]).trim()
                };

                // If the last line of the description contains a link, grab it

                {
                  let urlIndex = ret.desc.search(/\w*:\/\/[^\n]+$/);

                  if (urlIndex > 0) {
                    ret.link = ret.desc.slice(urlIndex).trim();
                    ret.desc = ret.desc.slice(0, urlIndex).trim();
                  }
                }

                return ret;
              })));
    }

    return this.eventList;
  }
}
