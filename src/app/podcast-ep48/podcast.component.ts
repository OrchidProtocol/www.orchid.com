import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp48Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 48: Avichal Garg');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_AvichalGarg.png');
        this.meta.setGlobalDescription('Listen to a new episode of Priv8 Podcast! Derek E. Silva joins Avichal Garg, Co-founder and Partner at Electric Capital, an early-stage venture firm. A great conversation on the rise of the creator economy, privacy-first technologies, and the future of programmable money.');
    }
}