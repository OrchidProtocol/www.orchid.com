import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp55Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 55: John Gleeson');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JohnGleeson.jpg');
        this.meta.setGlobalDescription('Host Derek E. Silva joins John Gleeson, COO of Storj Labs, a decentralized cloud storage provider. A great conversation on how developers can strengthen privacy and security, why data is worth protecting, and the future of the Internet.');
    }
}