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
        this.meta.setGlobalTitle('Podcast | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/social.png');
        this.meta.setGlobalDescription('We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN.');
    }
}
