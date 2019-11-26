import {Component, OnInit, LOCALE_ID, Inject, Renderer2} from "@angular/core";
import { DOCUMENT } from "@angular/common";

import {
  NavigationEnd,
  Router
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "orchid-www";

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: 'Korean' },
    { code: 'zh', label: 'Mandarin' },
    { code: 'ja', label: 'Japanese' }
  ];

  public constructor(private router: Router, @Inject(LOCALE_ID) protected localeId: string, @Inject(DOCUMENT) document, r: Renderer2) {
    r.addClass(document.body, `locale-${this.localeId}`);
  }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;
      
      // Scroll the user to the top of the page on load/refresh?
      // const win = typeof window !== "undefined" && window;
      // if (win) win.scrollTo(0, 0);

    }, (err) => {}, () => {});
  }
}
