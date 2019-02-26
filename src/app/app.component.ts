import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
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

  titleMap: Map<string, string> = new Map<string, string>([
    ["/", "Orchid"],
    ["/app", "App"],
    ["/network", "Network"],
    ["/why-orchid", "Why Orchid"],
    ["/events", "Events"],
    ["/dev-resources", "Dev Resources"],
    ["/privacy-policy", "Privacy Policy"],
    ["/service-terms", "Terms of Service"]
  ]);

  public constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;

      // TODO: this feels very bad
      this.titleService.setTitle(
          this.titleMap.get(this.router.routerState.snapshot.url));

      const win = typeof window !== "undefined" && window;

      if (win) win.scrollTo(0, 0);
    }, (err) => {}, () => {});
  }
}
