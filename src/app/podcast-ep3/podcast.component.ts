import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp3Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 3: Jyri Engestrom | Follow the White Rabbit');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_JEngestrom.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Jyri Engestrom, a partner at Yes VC, a venture capital firm that invests in startups set in motion by social movements. He shares his journey as a founder of both Jaiku and Ditto, which were acquired separately by Google and Groupon. We discuss the future of democracy, how technology affects humanity, and some recent efforts he and a few other entrepreneurs took to provide free testing for COVID-19.');
    }
}
