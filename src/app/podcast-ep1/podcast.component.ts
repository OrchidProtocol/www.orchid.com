import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp1Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 1: Interview Rich Staropoli | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RStaropoli.png');
        this.meta.setGlobalDescription('In our premiere episode, we go down the rabbit hole with Rich Staropoli, whose career reads like a Tom Clancy spy novel.');
    }
}
