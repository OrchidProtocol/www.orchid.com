import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  js: boolean = false;

  constructor() { }
  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    if (doc) {
      this.js = true;
    }
  }

}
