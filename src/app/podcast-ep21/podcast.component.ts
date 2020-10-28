import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp21Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 21: Neeraj Khandelwal');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_FErazo.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Neeraj Khandelwal, Co-founder of CoinDCX, the largest crypto exchange in India.');
    }
}
