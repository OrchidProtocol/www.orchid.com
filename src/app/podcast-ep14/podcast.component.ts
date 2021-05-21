import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp14Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 14: Dr. Juan E. Gilbert');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_JGilbert.jpg');
        this.meta.setGlobalDescription('Go down the rabbit hole with Dr. Juan E. Gilbert, Chair of the CISE Dept at the University of Florida. He shares how he’s pioneering the development in open source election systems, the virtual traffic stop, and how disinformation affects our democracy.');
    }
}
