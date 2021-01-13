import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp31Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 31: Jamie King');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/FTWRSocial_JamieKing.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Jamie King, Host of Steal this Show and Director of Steal this Film, a documentary on the movement against intellectual property. We take a deep dive into cancel culture, ongoing reality wars, and the consequences of disinformation.');
    }
}