import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.scss"]
})
export class PageLayoutComponent implements OnInit {
  menu: HTMLUListElement;
  bkgd: HTMLDivElement;

  constructor() {}

  ngOnInit() {
    this.menu = document.getElementById("nav-menu") as HTMLUListElement;
    this.bkgd = document.getElementById("nav-flyout-bkgd") as HTMLDivElement;

    let btn   = document.getElementById("nav-toggle") as HTMLButtonElement;
    let close = document.getElementById("nav-flyout-close") as
                HTMLButtonElement;

    btn.addEventListener("click", _ => this.toggle());
    close.addEventListener("click", _ => this.hide());
    this.bkgd.addEventListener("click", _ => this.hide());

    // TODO: this is only necessary because of Angular
    document.querySelectorAll("#nav-list a").forEach(el => {
      let a = el as HTMLAnchorElement;

      a.addEventListener("click", _ => this.hide());
    });
  }

  toggle() {
    if (this.menu.classList.contains("open")) {
      this.menu.classList.remove("open");
      this.bkgd.classList.remove("open");
    }
    else {
      this.menu.classList.add("open");
      this.bkgd.classList.add("open");
    }
  }

  hide() {
    this.menu.classList.remove("open");
    this.bkgd.classList.remove("open");
  }
}
