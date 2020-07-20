import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp7Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 7: Alexander Lloyd');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_LAlexander.jpg');
        this.meta.setGlobalDescription('Go down the rabbit hole with Alexander Lloyd, Founder of Accelerator Ventures, who sits on the board of the Human Rights Foundation, and is one of the authors of “The Little Bitcoin Book: Why Bitcoin Matters for Your Freedom, Finances, and Future.”');
    }
}
