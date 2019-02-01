import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.scss"]
})
export class PageLayoutComponent implements OnInit {
  isOpen: boolean;
  noShadow: boolean;

  constructor() {}

  ngOnInit() {
    this.isOpen   = false;
    this.noShadow = true;

    const doc = typeof document !== "undefined" && document;

    if (doc) {
      let btn   = doc.getElementById("nav-toggle") as HTMLButtonElement;
      let close = doc.getElementById("nav-flyout-close") as
                  HTMLButtonElement;
      let bkgd = doc.getElementById("nav-flyout-bkgd") as HTMLDivElement;

      btn.addEventListener("click", _ => this.isOpen = !this.isOpen);
      close.addEventListener("click", _ => this.isOpen = false);
      bkgd.addEventListener("click", _ => this.isOpen = false);

      // NB: this is only necessary because of Angular
      doc.querySelectorAll("#nav-list a").forEach(el => {
        let a = el as HTMLAnchorElement;

        a.addEventListener("click", _ => this.isOpen = false);
      });

      // #region scroll event listener

      let scrollPos     = 0;
      let scheduleFrame = true;

      document.addEventListener("scroll", e => {
        scrollPos = window.scrollY;

        if (scheduleFrame) {
          scheduleFrame = false;

          requestAnimationFrame(() => {
            this.noShadow = scrollPos <= 0; // TODO: this is inflexible

            scheduleFrame = true;
          });
        }
      });

      // #endregion
    }
  }
}
