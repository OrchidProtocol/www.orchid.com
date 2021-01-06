import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp30Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 30: Franck Nouyrigat');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/FTWRSocial_FranckNouyrigat.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Franck Nouyrigat, Co-founder of Startup Weekend and Electis, a nonprofit focused on how technology can reshape democracy. We take a deep dive into the future of voting, what’s in the DNA of a great entrepreneur, and how to build a robust community online.');
    }
}