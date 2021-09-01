import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp63Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 63: Julie Owono');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JulieOwono.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Julie Owono, Executive Director for Internet Without Borders, and an inaugural member of the Facebook Oversight Board. A great conversation on how we can work together to protect digital rights, the true power of social media restrictions, and why Facebook created its own Supreme Court.');
    }
}