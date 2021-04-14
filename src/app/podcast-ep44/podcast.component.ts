import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp44Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 44: Bill Barhydt');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/BillBarhydt_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with serial entrepreneur Bill Barhydt, Founder and CEO Abra, the digital cash peer-to-peer money transfer network available in over 150 countries. We take a deep dive into the future of banking, how to protect your financial privacy with Bitcoin, and why fungibility is key to the future of crypto.');
    }
}