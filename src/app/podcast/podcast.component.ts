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
        this.meta.setGlobalTitle('Follow the White Rabbit | A Privacy & Technology Podcast');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/social.png');
        this.meta.setGlobalDescription('Please listen to our podcast with top technology industry experts discussing surveillance and privacy, and its implications for human rights and democracy.');
        
        const doc = typeof document !== "undefined" && document;
        if (doc) {
            document.body.classList.add('no-banner');
        }
    }
}
