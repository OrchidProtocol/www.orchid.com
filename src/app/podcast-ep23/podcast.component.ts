import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp23Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 23: Roneil Rumburg');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RRumburg.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Roneil Rumburg, CEO of Audius, a blockchain music platform that has been called the decentralized Spotify.');
    }
}
