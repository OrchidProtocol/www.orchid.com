import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp19Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 19: David Pan, Coindesk Journalist');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_DPan.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with David Pan, a business journalist for Coindesk covering global stories on blockchain and crypto. A great conversation on Hong Kong’s new national security law, how China is fueling blockchain growth, press censorship in the digital age, and if TikTok is a privacy threat.');
    }
}
