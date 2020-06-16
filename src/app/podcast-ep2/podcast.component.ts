import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp2Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 2: The New Future of Digital Identity and Crypto | Follow the White Rabbit');
        //this.meta.setGlobalImage('');
        //this.meta.setGlobalDescription('');
    }
}
