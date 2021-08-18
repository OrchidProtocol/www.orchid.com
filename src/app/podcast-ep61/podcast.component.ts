import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp61Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 61: Dr. Gabriela Zanfir-Fortuna');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_GabrielaZanfirFortuna.png');
        this.meta.setGlobalDescription('Host Derek E. Silva joins Dr. Gabriela Zanfir-Fortuna, Director for the Future of Privacy Forum, a Washington, DC-based think tank and advocacy group focused on data privacy issues. They take a deep dive into the digital disruption of human rights, how the culture of surveillance dictates our daily lives, and new privacy laws from around the world.');
    }
}