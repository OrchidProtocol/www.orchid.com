import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp28Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 28: Andreas Antonopoulos');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_AAntonopoulos.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Andreas Antonopoulos, tech entrepreneur and one of crypto\'s best known evangelists. He shares his thoughts on the future of Bitcoin, his mission to educate the world about open blockchain, and why society should protect privacy online.');
    }
}