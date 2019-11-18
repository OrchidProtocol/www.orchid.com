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
    this.meta.setGlobalTitle('Distributed VPN | Orchid');
    this.meta.setGlobalDescription('The Orchid network—an overlay network that runs on the existing internet—is designed for a mutual exchange of benefit in a peer-to-peer marketplace.');
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
