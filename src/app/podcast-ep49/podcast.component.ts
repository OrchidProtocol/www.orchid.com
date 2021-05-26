import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp49Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 49: Dragana Kaurin');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_DraganaKaurin.png');
        this.meta.setGlobalDescription('What happens when we design with equity in mind? Derek E. Silva joins Dragana Kaurin, a human rights researcher and founder of The Localization Lab, an organization fighting for equal access to information. A deep dive into building the Internet for everyone, and the privacy issues around digital identity.');
    }
}