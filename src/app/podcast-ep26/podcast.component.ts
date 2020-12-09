import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp26Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 26: Anne Ahola Ward');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_AWard.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with futurist and CEO of CircleClick, Anne Ahola Ward. She shares her thoughts on the fight for Section 230, why decentralization matters, and what tech trends to watch for in 2021.');
    }
}