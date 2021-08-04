import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp59Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 59: Raullen Chai');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_RaullenChai.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Raullen Chai, co-founder and CEO of IoTeX, a decentralized network for the Internet of Things. Raullen shares his vision of an open ecosystem where humans and machines can interact with guaranteed trust, free will, and privacy.');
    }
}