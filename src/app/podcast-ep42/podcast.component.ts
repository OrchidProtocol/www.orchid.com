import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp42Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 42: Tor Bair');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/TorBair_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Tor Bair, Founder of the Secret Foundation, an organization that supports the adoption of open-source privacy technologies. A great conversation on the effects of Web3 in a digital world, why blockchain is the blueprint for a new economy, and the evolution of privacy.');
    }
}