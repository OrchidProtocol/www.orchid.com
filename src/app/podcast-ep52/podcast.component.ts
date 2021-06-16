import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp52Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 52: Gbenga Sesan');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_GbengaSesan.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Gbenga Sesan, the Executive Director of Paradigm, a pan-African social enterprise working on digital inclusion. They take a deep dive into the unique role of social media in Africa, Internet freedom, and why technology can’t fix inequality online.');
    }
}