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
    document.body.classList.add(`locale-${this.localeId}`);

    const tags_to_remove = document.querySelectorAll('head link[rel="alternate"], head meta[rel="canonical"]');
    for (let index = 0; index < tags_to_remove.length; index++) {
      const element = tags_to_remove[index];
      element.parentNode.removeChild(element);
    }

    let location = document.location._href ? document.location._href : document.location.pathname;
    if (!location.match(/\/$/)) {
        location += '/';
    }
    if (!location.match(/\*/)) {
      if (this.localeId !== 'en-US') {
        r.setAttribute(document.querySelector('html'), 'lang', this.localeId);
        this.createMetaTag(document, r, 'meta', { "rel": "canonical", "href": `https://www.${this.localeId.replace(/en-us/i, 'en')}.orchid.com` + location })
      } else {
        this.createMetaTag(document, r, 'meta', { "rel": "canonical", "href": `https://www.orchid.com` + location })
      }
    }


    /*if (this.localeId !== 'en' && this.localeId !== 'en-US')*/ this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://orchid.com" + location, "hreflang": "x-default" })
    if (this.localeId !== 'ja') this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://ja.orchid.com" + location, "hreflang": "ja" })
    if (this.localeId !== 'ko') this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://ko.orchid.com" + location, "hreflang": "ko" })
    if (this.localeId !== 'zh') this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://zh.orchid.com" + location, "hreflang": "zh" })
    if (this.localeId !== 'ru') this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://ru.orchid.com" + location, "hreflang": "ru" })
    if (this.localeId !== 'id') this.createMetaTag(document, r, 'link', { "rel": "alternate", "href": "https://id.orchid.com" + location, "hreflang": "id" })

  }

  createMetaTag(document, r, type: string, attributes: any) {

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
