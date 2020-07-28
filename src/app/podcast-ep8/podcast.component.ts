import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp8Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 8: Cindy Cohn');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EpisodeHeader_CCohn.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Cindy Cohn, Executive Director for the Electronic Frontier Foundation (EFF), an organization that advocates for our civil liberties and freedom online.');
    }
}
