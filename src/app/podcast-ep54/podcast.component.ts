import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp54Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 54: Brittany Piovesan');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_BrittanyPiovesan.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Brittany Piovesan, Program Officer for the Internet Society Foundation focused on initiatives that strengthen the Internet. Brittany shares her thoughts on how to use the Internet to shape a better future for education, healthcare, and create more economic opportunities for us all.');
    }
}