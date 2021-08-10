import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp60Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 60: Berhan Taye');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_BerhanTaye.png');
        this.meta.setGlobalDescription('Host Derek E Silva joins digital rights activist Berhan Taye, a senior advisor at Internews, a nonprofit supporting independent media in 100 countries. We take a deep dive into the rise of digital authoritarianism, combating misinformation online, and what happens to countries when the Internet shuts down.');
    }
}