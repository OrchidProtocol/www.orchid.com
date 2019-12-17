import { Component, OnInit } from "@angular/core";

@Component({
  selector: "setup-video-section",
  templateUrl: "./setup-video-section.component.html",
  styleUrls: ["./setup-video-section.component.scss"],
})

export class SetupVideoSectionComponent implements OnInit {
  js: boolean = false;

  constructor() { }

  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    if (doc) {
      this.js = true;
    }
  }

}
