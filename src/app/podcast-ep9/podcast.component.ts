import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp9Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 9: David Chaum');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_DChaum.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with a forefather of crypto, David Chaum, CEO of the xx Network.');
    }
}
