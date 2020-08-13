import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp10Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 10: Ben Bartlett');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_BBartlett.jpg');
        this.meta.setGlobalDescription('Go down the rabbit hole with a forefather of crypto, David Chaum, CEO of the xx Network.');
    }
}
