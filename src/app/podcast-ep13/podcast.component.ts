import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp13Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 13: Brian J. Fox');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_BFox.jpg');
        this.meta.setGlobalDescription('Go down the rabbit hole with Brian J. Fox, Co-founder of Orchid & the original author of the GNU Bash shell. He shares his open source journey as the first employee of the Free Software Foundation, building Orchid’s VPN protocol, and the biggest lessons he learned as an entrepreneur.');
    }
}
