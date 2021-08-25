import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp62Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 62: Leo Schwartz');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_LeoSchwartz.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Leo Schwartz, a reporter for Rest of the World, an international nonprofit media organization. We take a deep dive into press freedom around the world, the spyware threat to journalists, and how social media affects the news.');
    }
}