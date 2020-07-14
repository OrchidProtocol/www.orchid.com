import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp6Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 6: Paul Veradittakit | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_PVer.jpg');
        this.meta.setGlobalDescription('Go down the rabbit hole with Paul Veradittakit, a Partner at Pantera Capital.');
    }
}
