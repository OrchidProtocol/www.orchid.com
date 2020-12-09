import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp27Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 27: Kurt Rohloff');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_KRohloff.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with open-source pioneer Kurt Rohloff, Co-founder and CTO of Duality Technologies. We take a deep dive into his life-changing role at DARPA, privacy concerns associated with contact tracing, and why homomorphic encryption is the holy grail of data security.');
    }
}