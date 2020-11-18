import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp24Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 24: Brad Kam');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_BKam.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Brad Kam, Co-founder of Unstoppable Domains. He shares his perspective on how the Internet is broken, increasing censorship of content, and the economic benefits of using .crypto domains.');
    }
}
