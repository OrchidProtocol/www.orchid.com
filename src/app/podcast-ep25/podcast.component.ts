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
        this.meta.setGlobalTitle('Episode 25: [placeholder]');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/[placeholder]');
        this.meta.setGlobalDescription('[placeholder]');
    }
}