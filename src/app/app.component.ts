import {Component, OnInit} from "@angular/core";

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

  public constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;

      // Scroll the user to the top of the page on load/refresh?
      // const win = typeof window !== "undefined" && window;
      // if (win) win.scrollTo(0, 0);

    }, (err) => {}, () => {});
  }
}
