import { Component, OnInit } from '@angular/core';
import { downloadWhitepaper } from '../whitepaper';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-about-network',
  templateUrl: './about-network.component.html',
  styleUrls: ['./about-network.component.scss']
})
export class AboutNetworkComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Our Vision for Restoring Privacy | Orchid');
    this.meta.setGlobalDescription('Our vision is to restore user trust on the internet by creating our private internet access vpn, built as an open source app');
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
