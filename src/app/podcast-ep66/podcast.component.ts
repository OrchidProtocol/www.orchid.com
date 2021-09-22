import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp66Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 66: Jason Rieff');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JasonRieff.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Jason Rieff, Co-founder of Noizd, a music-based NFT marketplace that allows fans to buy and sell the full rights to amazing unreleased collectible music. A great conversation on the NFT revolution, how Noizd is empowering artists to control their music and helping listeners discover new talent.');
    }
}