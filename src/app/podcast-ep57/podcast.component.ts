import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp57Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 57: Kean Birch');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_KeanBirch.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Kean Birch, an expert in technoscience and professor at York University. They take a deep dive into the Facebook effect, the rise of the data economy, and how private data changes the game of capitalism.');
    }
}