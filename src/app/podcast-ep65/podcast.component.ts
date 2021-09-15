import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp65Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 65: Alexander Klus');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_AlexanderKlus.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Alexander Klus, Founder of Creaton, a new decentralized content sharing platform. A great conversation on where the creator economy is headed next, how NFTs unlock value for artists, and the future of digital media content.');
    }
}