import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp20Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 20: Neeraj Khandelwal');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_NKhandewal.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Neeraj Khandelwal, Co-founder of CoinDCX, the largest crypto exchange in India.');
    }
}
