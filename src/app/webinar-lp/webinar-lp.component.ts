import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'webinar-lp',
  templateUrl: './webinar-lp.component.html',
  styleUrls: ['./webinar-lp.component.scss']
})
export class WebinarLPComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Webinar: Creating an Orchid Account | Orchid');
    this.meta.setGlobalDescription('Join to learn how to get Orchid setup and running. You will learn how to use Metamask to fund an Orchid account with OXT.');
    this.meta.setGlobalImage('/assets/img/how-it-works/social.png');
  }

}
