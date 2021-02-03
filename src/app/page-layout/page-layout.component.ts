import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, tap } from 'rxjs/operators';
@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.scss"]
})
export class PageLayoutComponent implements OnInit {
  js: boolean = false;
  animateMenu: boolean = false;
  isOpen: boolean = false;
  noShadow: boolean = true;
  purple: boolean;
  blogLink: string;
  year: number;

  constructor(
    route: ActivatedRoute,
    router: Router,
    @Inject(LOCALE_ID) protected localeId: string,
  ) {
    const purpleURLs = [
      '/priv8',
    ]
    if (purpleURLs.includes(router.url)) {
      this.purple = true;
    }
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      route.firstChild.data.subscribe(d => {
        this.purple = !!d["purpleLayout"];
        console.log(this.purple)
      });
    });
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    this.blogLink = "https://blog.orchid.com/";
    if (this.localeId !== 'en-US') {
      this.blogLink = `https://blog.${this.localeId}.orchid.com/`;
    }

    if (doc) {
      this.js = true;

      // This prevents an annoying bug with the stylesheets where the menu slides
      // out of view immediately after loading
      setTimeout(_ => this.animateMenu = true, 20);

      

      let nav = doc.getElementById("nav") as HTMLElement;
      let close = doc.getElementById("nav-flyout-close") as HTMLButtonElement;
      let bkgd = doc.getElementById("nav-flyout-bkgd") as HTMLDivElement;
      let btn = doc.getElementById("nav-toggle") as HTMLButtonElement;
      let pin = doc.getElementById("nav-pin") as HTMLDivElement;
      let body = doc.body;

      const toggleMenuOpen = () => {
        if (this.isOpen) body.classList.add("navigation-open");
        else body.classList.remove("navigation-open");
      }

      btn.addEventListener("click", _ => {
        this.isOpen = !this.isOpen;
        toggleMenuOpen();
      });
      close.addEventListener("click", _ => {
        this.isOpen = false;
        toggleMenuOpen();
      });
      bkgd.addEventListener("click", _ => {
        this.isOpen = false;
        toggleMenuOpen();
      });

      // NB: this is only necessary because of Angular
      doc.querySelectorAll(".nav-list a").forEach(el => {
        let a = el as HTMLAnchorElement;

        a.addEventListener("click", _ => this.isOpen = false);
      });

      // #region scroll event listener

      let scheduleFrame = true;

      const checkShadow = () => {
        if (scheduleFrame) {
          scheduleFrame = false;

          requestAnimationFrame(() => {
            let navBottom = nav.getBoundingClientRect().bottom;
            let pinBottom = pin.getBoundingClientRect().bottom;

            this.noShadow = navBottom <= pinBottom;

            scheduleFrame = true;
          });
        }
      };

      doc.addEventListener("scroll", checkShadow);
      window.addEventListener("resize", checkShadow);

      // #endregion
    }
  }
}
