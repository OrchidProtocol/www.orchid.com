import { Component, OnInit } from '@angular/core';
import { downloadWhitepaper } from '../whitepaper';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadWhitepaper() { downloadWhitepaper(); }
}
