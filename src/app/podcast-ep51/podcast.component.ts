import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp51Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 51: Greg Osuri');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_GregOsuri.png');
        this.meta.setGlobalDescription('What is the future of Web3? Host Derek E. Silva joins Greg Osuri, Founder and CEO of Akash Network, the open-source, decentralized cloud. They take a deep dive into the future impact of AI, overcoming the challenges of distributed networks, and the battle for data sovereignty.');
    }
}