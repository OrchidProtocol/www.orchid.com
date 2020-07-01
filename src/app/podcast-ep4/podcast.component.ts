import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp4Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 4: Roger Ver | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_RVer.jpg');
        this.meta.setGlobalDescription('In our fourth episode, we go down the rabbit hole with Roger Ver, the co-creator of Bitcoin Cash. He shares his incredible journey as an early investor in Bitcoin startups, his views on the role government should play in citizens’ lives, and the fundamentals of voluntaryism.');
    }
}
