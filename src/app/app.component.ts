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
    ["/", "Orchid | Open Source VPN & Privacy Software"],
    ["/download", "Packet Analyzer App for iOS & Android | Orchid"],
    ["/about-us", "About the Open Internet | Orchid"],
    ["/network", "Distributed VPN | Orchid"],
    ["/vision", "Our Vision | Orchid"],
    ["/faqs", "FAQs | Orchid"],
    ["/events", "Events | Orchid"],
    ["/privacy-policy", "Privacy Policy | Orchid"],
    ["/service-terms", "Terms of Service | Orchid"],
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
