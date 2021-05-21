import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp39Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 39: Gregory Landua');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/GregoryLandua_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Gregory Landua, co-founder of Regen Network, a global marketplace that aligns economics with ecology. We take a deep dive into how we can reverse climate change, become carbon neutral, and collaborate better with each other.');
    }
}