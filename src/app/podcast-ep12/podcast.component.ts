import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp12Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 12: Ken Seiff');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_KSeiff.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Orchid’s CEO, Dr. Steven Waterhouse and Ken Seiff, Managing Partner at Beanstalk Ventures. They share their thoughts on privacy, the future of democracy, and the dark & light side of the Internet.');
    }
}
