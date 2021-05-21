import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp34Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 34: Joe Toscano');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/JoeToscano_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Joe Toscano, featured in the hit documentary “The Social Dilemma”, and co-founder and CIO of BEACON, an organization that operates at the intersection of human-centered design, social impact, and public policy.');
    }
}