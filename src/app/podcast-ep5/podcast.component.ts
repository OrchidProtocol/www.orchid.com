import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp5Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 5: Jehan Chu | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_JChu.jpg');
        this.meta.setGlobalDescription('In our fifth episode, we go down the rabbit hole with Jehan Chu, Co-founder & Managing Partner of Kenetic Capital.');
    }
}
