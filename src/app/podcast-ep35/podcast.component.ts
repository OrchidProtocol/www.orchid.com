import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp35Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 35: Leigh Honeywell');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/LeighHoneywell_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Leigh Honeywell, Founder & CEO of Tall Poppy, which builds tools and services to help companies protect their employees from online harassment and abuse. We take a deep dive into the rise of cyberbullying, promoting psychological safety in the workplace, and how to defend yourself from online trolls.');
    }
}