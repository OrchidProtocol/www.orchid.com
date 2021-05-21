import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp18Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 18: Alex Gluchowski');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_AGluchowski.jpg');
        this.meta.setGlobalDescription('We go down the rabbit hole with Alex Gluchowski, CEO of Matter Labs that\'s unchaining #Ethereum. He shares his thoughts on preserving privacy, how tech is empowering human rights, and what social impact the public blockchain has on the world.');
    }
}
