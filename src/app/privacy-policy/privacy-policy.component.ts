import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Privacy Policy | Orchid');
    this.meta.setGlobalDescription('The Orchid Privacy Policy explains how our site will collect, use, protect or otherwise handle your Personally Identifiable Information with our free private VPN service. ');
  }

}
