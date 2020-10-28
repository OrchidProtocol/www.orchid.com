import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp21Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 21: Felipe Erazo');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_FErazo.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Felipe Erazo, a crypto journalist for Cointelegraph. A great conversation on how blockchain is revolutionizing Latin America, protecting human rights, and empowering freedom of speech.');
    }
}
