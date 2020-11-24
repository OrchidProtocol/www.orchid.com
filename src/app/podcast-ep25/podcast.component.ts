import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp25Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 25: Roger Huang');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RHuang.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Roger Huang, CEO of CyberSecure, a company that develops open-source cybersecurity tools. A deep dive into the Five Eyes alliance\'s complex history, China\'s digital yen, and best practices for protecting your privacy online.');
    }
}