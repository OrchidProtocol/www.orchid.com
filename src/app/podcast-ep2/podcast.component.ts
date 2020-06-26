import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp2Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 2: The New Future of Digital Identity and Crypto | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_VLingham.png');
        this.meta.setGlobalDescription('In our second episode, we go down the rabbit hole with Vinny Lingham, South African entrepreneur and Co-founder & CEO of Civic Technologies, a company at the forefront of the digital identity revolution.');
    }
}
