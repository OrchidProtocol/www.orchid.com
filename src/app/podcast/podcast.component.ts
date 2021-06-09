import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('The Priv8 Podcast | By Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/social.png');
        this.meta.setGlobalDescription('Priv8 Podcast features top academics, founders, technology & legal industry experts discussing surveillance and privacy, and its implications for human rights and democracy.');
        
        const doc = typeof document !== "undefined" && document;
        if (doc) {
            document.body.classList.add('no-banner');
        }
    }
}
