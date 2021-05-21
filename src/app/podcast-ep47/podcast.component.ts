import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp47Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 47: Kara Swisher');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_KaraSwisher.png');
        this.meta.setGlobalDescription('This week we feature a special episode from Priv8\'s digital privacy summit with The New York Times’ Kara Swisher. She joins Taiwan\'s Digital Minister Audrey Tang to discuss lessons learned from Taiwan\'s unique response to the pandemic that successfully protected the population while preserving privacy.');
    }
}