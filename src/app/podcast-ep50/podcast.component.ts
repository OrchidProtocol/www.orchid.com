import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp50Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 50: Rebecca Wexler');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_RebeccaWexler.png');
        this.meta.setGlobalDescription('How does technology affect our democracy and government? Host Derek E. Silva joins Rebecca Wexler, Professor of Law at UC Berkeley, School of Law. They take a deep dive into the criminal justice system, the power imbalance caused by predictive technologies, and human rights in the digital age.');
    }
}