import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp38Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 38: Miko Matsumura');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/MikoMatsumura_Social.png');
        this.meta.setGlobalDescription('Go down the rabbit hole with Miko Matsumura, co-founder of crypto exchange Evercoin and General Partner with Gumi Ventures, an investment fund focused on early stage blockchain startups. He shares his thoughts on the impact of open source on human rights, why Bitcoin is a social network, and the emergence of ICOs.');
    }
}