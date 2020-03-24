import { Component, OnInit, LOCALE_ID, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { MetaService } from './MetaService';

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
    { code: 'ja', label: 'Japanese' },
    { code: 'id', label: 'Indonesian' },
    { code: 'ru', label: 'Russian' },
  ];

  public constructor(
    private router: Router, 
    private meta: MetaService, 
    @Inject(LOCALE_ID) protected localeId: string, 
    @Inject(DOCUMENT) document, 
    r: Renderer2
  ) {
    r.addClass(document.body, `locale-${this.localeId}`);
    if (this.localeId !== 'en-US') {
      r.setAttribute(document.querySelector('html'), 'lang', this.localeId);
      this.createMetaTag(document, r, 'meta', {"rel": "canonical", "href": `https://www.${this.localeId.replace(/en-us/i, 'en')}.orchid.com`+document.location.pathname})
    } else {
      this.createMetaTag(document, r, 'meta', {"rel": "canonical", "href": `https://www.orchid.com`+document.location.pathname})
    }

    

    /*if (this.localeId !== 'en' && this.localeId !== 'en-US')*/ this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://orchid.com"+document.location.pathname, "hreflang": "x-default"})
    if (this.localeId !== 'ja') this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://ja.orchid.com"+document.location.pathname, "hreflang": "ja"})
    if (this.localeId !== 'ko') this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://ko.orchid.com"+document.location.pathname, "hreflang": "ko"})
    if (this.localeId !== 'zh') this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://zh.orchid.com"+document.location.pathname, "hreflang": "zh"})
    if (this.localeId !== 'ru') this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://ru.orchid.com"+document.location.pathname, "hreflang": "ru"})
    if (this.localeId !== 'id') this.createMetaTag(document, r, 'link', {"rel": "alternate", "href": "https://id.orchid.com"+document.location.pathname, "hreflang": "id"})

  }

  createMetaTag (document, r, type: string, attributes: any) {
    const tag = document.createElement(type);
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        const value = attributes[key];
        tag.setAttribute(key, value);
      }
    }
    document.head.appendChild(tag);
  }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;

      // Scroll the user to the top of the page on load/refresh?
      // const win = typeof window !== "undefined" && window;
      // if (win) win.scrollTo(0, 0);

    }, (err) => { }, () => { });
  }
}
