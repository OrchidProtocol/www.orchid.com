import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState
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
    ["/what-is-orchid", "What is Orchid?"],
    ["/why-orchid", "Why Orchid"],
    ["/dev-resources", "Dev Resources"],
  ]);

  public constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) return;

      console.log(this.titleMap, this.router.routerState.snapshot.url);

      // TODO: this feels very bad
      this.titleService.setTitle(
          this.titleMap.get(this.router.routerState.snapshot.url));
    }, (err) => {}, () => {});
  }

  getBreadcrumbs(state, parent: ActivatedRoute): string[] {
    const data = [];

    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getBreadcrumbs(state, state.firstChild(parent)));
    }

    return data;
  }

  public setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
}
