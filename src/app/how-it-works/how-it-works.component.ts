import { Component, OnInit } from '@angular/core';
import { downloadWhitepaper } from '../whitepaper';
import { MetaService } from '../MetaService';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('How It Works | Orchid');
    this.meta.setGlobalDescription('The Orchid network enables a decentralized virtual private network (VPN), allowing users to buy bandwidth from a global pool of service providers.');
    this.meta.setGlobalImage('/assets/img/how-it-works/social.png');
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
