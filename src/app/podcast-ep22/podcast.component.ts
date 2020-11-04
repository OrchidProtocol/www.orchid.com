import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp22Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 22: Adriana Hamacher');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_AHamacher.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Adriana Hamacher, a senior journalist at Decrypt Media. A fascinating conversation on the future of robotics, crypto’s social impact, and the man who saved Sushiswap.');
    }
}
