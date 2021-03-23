import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp41Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 41: Aibek Esengulov');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/');
        this.meta.setGlobalDescription('Go down the rabbit hole with Aibek Esengulov, Founder of Horizontal Systems, the developers of the privacy-focused wallet, Unstoppable. We take a deep dive into the DEFI revolution, investing without borders, and the rise of digital collectibles.');
    }
}