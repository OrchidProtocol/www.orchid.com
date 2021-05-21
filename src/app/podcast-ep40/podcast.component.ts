import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp40Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 40: Marvin Tong');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/MarvinTong_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Marvin Tong, co-founder, and CEO of Phala Network. We take a deep dive into how companies can leverage big data, the role of confidential computing, and how Phala is bringing on-chain privacy to the Polkadot ecosystem.');
    }
}