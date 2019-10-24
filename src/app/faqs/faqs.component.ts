import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})

export class FaqsComponent implements OnInit {
  url:string = "/assets/json/faqs.json";
  faqs:any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(response => this.faqs = response);
  }

  encodeURIComponent (component: string):string {
    return encodeURIComponent(component);
  }

  toggle_questions(cat) { cat.open = !!!cat.open; }

  close_all() {
    for (var i = 0; i < this.faqs.length; i++) {
      this.faqs[i].open = false;
    }
  }

  open_all() {
    for (var i = 0; i < this.faqs.length; i++) {
      this.faqs[i].open = true;
    }
  }

  faqs_clicked() {
    if (this.are_all_open())
      this.close_all();
    else
      this.open_all();
  }

  are_all_open():boolean {
    var num_open = 0;

    for (var i = 0; i < this.faqs.length; i++) {
      if (this.faqs[i].open) {
        num_open++;
      }
    }

    return (num_open == this.faqs.length);
  }

  any_open():boolean {
    var found:boolean = false;
    for (var i = 0; i < this.faqs.length; i++) {
      if (this.faqs[i].open) {
        found = true;
        break;
      }
    }
    return found;
  }

}
