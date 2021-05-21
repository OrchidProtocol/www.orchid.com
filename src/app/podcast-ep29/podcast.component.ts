import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp29Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 29: Yaniv Tal');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_YTal.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Yaniv Tal, Project Lead at Graph Protocol. We take a deep dive into the inspiration behind building the Graph Network and how they\'re helping the next generation of dApp developers create a decentralized future.');
    }
}