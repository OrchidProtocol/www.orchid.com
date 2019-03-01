import { Component, OnInit } from '@angular/core';
import { downloadWhitepaper } from '../whitepaper';

@Component({
  selector: 'app-about-network',
  templateUrl: './about-network.component.html',
  styleUrls: ['./about-network.component.scss']
})
export class AboutNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
