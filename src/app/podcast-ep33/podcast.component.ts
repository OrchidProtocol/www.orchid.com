import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp33Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 33: John Redgrave');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/JohnRedgrave_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Co-founder and CEO John Redgrave of Sentropy Technologies to keep users and brands safe from online abuse. We take a deep dive into content moderation challenges, how to build trust in digital communities, and the rise of the dark web.');
    }
}