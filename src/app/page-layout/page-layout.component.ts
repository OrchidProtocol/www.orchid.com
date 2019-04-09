import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

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

  constructor(route: ActivatedRoute) {
    route.data.subscribe(d => this.purple = !!d["purpleLayout"]);
  }

  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    if (doc) {
      this.js = true;

      // This prevents an annoying bug with the stylesheets where the menu slides
      // out of view immediately after loading
      setTimeout(_ => this.animateMenu = true, 20);

      let nav   = doc.getElementById("nav") as HTMLElement;
      let close = doc.getElementById("nav-flyout-close") as HTMLButtonElement;
      let bkgd  = doc.getElementById("nav-flyout-bkgd") as HTMLDivElement;
      let btn   = doc.getElementById("nav-toggle") as HTMLButtonElement;
      let pin   = doc.getElementById("nav-pin") as HTMLDivElement;

      btn.addEventListener("click", _ => this.isOpen = !this.isOpen);
      close.addEventListener("click", _ => this.isOpen = false);
      bkgd.addEventListener("click", _ => this.isOpen = false);

      // NB: this is only necessary because of Angular
      doc.querySelectorAll("#nav-list a").forEach(el => {
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
