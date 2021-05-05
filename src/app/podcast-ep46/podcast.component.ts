import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp46Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 46: Edward Snowden');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_Snowden.png');
        this.meta.setGlobalDescription('“Don\'t stay safe, stay free." This week we feature a special episode: Edward Snowden’s talk from the Priv8 digital privacy summit. He shares his thoughts on the rise of surveillance capitalism, why online privacy matters, and how to fix a broken Internet.');
    }
}