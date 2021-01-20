import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp32Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 32: Nathan Wilcox');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/NathanWilcox_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Nathan Wilcox, CTO of Electric Coin Company, the inventors of Zcash, empowering people with economic freedom. We take a deep dive into the next wave of defi, why privacy is key to crypto adoption and the benefits & risks of decentralization.');
    }
}