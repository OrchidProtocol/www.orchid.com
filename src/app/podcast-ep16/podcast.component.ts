import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp16Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 16: Jason Brett');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_JBrett.jpg');
        this.meta.setGlobalDescription('Go down the rabbit with Jason Brett, CEO of Value Technology, a D.C. think tank focused on blockchain. He shares his journey through the 2008 banking crisis, the rise of Bitcoin, and how crypto has impacted our democracy.');
    }
}
