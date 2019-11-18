import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';
import { faqs } from './faqs.js';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent implements OnInit {
  url:string = "/assets/json/faqs.json";
  faqs:any = faqs;

  constructor(private meta: MetaService) {
  }

  ngOnInit() {
    this.meta.setGlobalTitle('FAQs | Orchid');
    this.meta.setGlobalDescription('What is Orchid? - Orchid is a decentralized, market-based system for anonymous communication and virtual private networking, including a bandwidth market where node providers stake tokens to advertise their services using the Ethereum blockchain and receive payment in OXT (Orchid’s native cryptocurrency)');
  }

  anchorParse (component: string):string {
    return component.replace(/\?/gi, '').replace(/[^0-9a-z]/gi, '-').toLowerCase();
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
