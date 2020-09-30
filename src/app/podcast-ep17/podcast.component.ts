import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp17Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 17: Dawn Song, CEO of Oasis Labs');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_DSong.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Dawn Song, Professor of Computer Science at UC Berkeley and CEO of Oasis Labs. We dive deep into the challenges we face in the digital world, why we are at the inflection point for data privacy, and her vision for building a responsible data economy.');
    }
}
