import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp11Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 11: Richard Muirhead');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RMuirhead.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Richard Muirhead, Managing Partner of Fabric Ventures and an early Orchid supporter. A Bitcoin believer since 2013, he shares his ideas about decentralization, the token economy, and the future of privacy.');
    }
}
