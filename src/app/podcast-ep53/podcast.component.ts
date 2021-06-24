import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp53Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 53: Jason Pielemeier');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JasonPielemeier.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Jason Pielemeier, Policy Director at the Global Network Initiative, which protects Internet freedom and digital rights. They take a deep dive into the evolution of corporate accountability, human rights principles, and the right to be forgotten.');
    }
}