import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp43Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 43: Emin Gün Sirer');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/EminGunSirer_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with Emin Gün Sirer, Founder and CEO of Ava Labs, the team behind the Avalanche blockchain platform. A leader in peer-to-peer systems, he shares his thoughts on how to build trust, transparency, and privacy with decentralizing technologies.');
    }
}