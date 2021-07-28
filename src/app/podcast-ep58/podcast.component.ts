import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp58Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 58: Jim Harper');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JimHarper.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Jim Harper, a privacy expert and senior fellow at American Enterprise Institute, a Washington, D.C.-based think tank that researches government, economics, and social welfare. They take a deep dive into the changing definition of privacy, reforming Section 230, and why Bitcoin’s value is all in the eye of the ‘bithodler’.');
    }
}