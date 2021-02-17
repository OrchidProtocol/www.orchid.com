import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp36Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 36: Lance Vick');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/LanceVick_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Lance Vick, Senior Security Engineer at Polychain Capital and the Founder of #!, a group focused on privacy, security, and digital sovereignty. We take a deep dive into the dark side of hacking, how we can avoid the next SolarWinds attack, and the difference between privacy and anonymity.');
    }
}