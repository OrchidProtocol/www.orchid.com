import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp10Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 10: Ben Bartlett');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_BBartlett.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Ben Bartlett, an environmental lawyer and a Berkeley City Council Member. The son of community activists he shares his family\'s rich history and personal fight for freedom. A timely discussion on the future of democracy, personal freedom, and defending our civil rights.');
    }
}
