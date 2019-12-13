import { Component, OnInit } from "@angular/core";

@Component({
  selector: "video-section",
  templateUrl: "./video-section.component.html",
  styleUrls: ["./video-section.component.scss"],
})

export class VideoSectionComponent implements OnInit {
  js: boolean = false;

  constructor() { }

  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    if (doc) {
      this.js = true;
    }
  }

}
