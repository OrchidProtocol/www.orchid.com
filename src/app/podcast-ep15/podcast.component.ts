import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp15Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 15: Val Mack');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_VMack.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Val Mack, a Software Architect at Quant Five and a member of Women Who Code. A blockchain developer & entrepreneur, she shares her insights on compassionate technologies, data privacy, and how to navigate a career in tech.');
    }
}
