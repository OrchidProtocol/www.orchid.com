import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp64Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 64: Sonny King');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_SonnyKing.png');
        this.meta.setGlobalDescription('Host Derek E Silva joins Sonny King, Executive Technology Director for frog, an award-winning design studio. A great conversation on best practices for achieving privacy by design, the importance of building a more sustainable future, and how startups can make their mark in the world.');
    }
}