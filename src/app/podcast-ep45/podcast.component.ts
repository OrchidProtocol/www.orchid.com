import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp45Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 45: New Priv8 Podcast with Derek E. Silva');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/OrchidBlog_PodcastTransition.png');
        this.meta.setGlobalDescription('We are excited to share that Follow the White Rabbit is now the Priv8 Podcast with host Derek E. Silva. Join us for a weekly dose of commentary on privacy and technology. Join us this May for our first episode featuring Edward Snowden\'s talk from the Priv8 digital privacy summit!');
    }
}