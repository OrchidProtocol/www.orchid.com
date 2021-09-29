import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
	selector: 'app-podcast',
	templateUrl: './podcast.component.html',
	styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp67Component implements OnInit {

	constructor(private meta: MetaService) { }

	ngOnInit() {
		this.meta.setGlobalTitle('Episode 67: Brett Solomon');
		this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_BrettSolomon.png');
		this.meta.setGlobalDescription('Host Derek E Silva joins Brett Solomon, Executive Director and Co-founder of Access Now, where he leads the organizations to defend and extend the digital rights of users at risk around the world. They take a deep dive into tracking global Internet shutdowns, censorship’s impact on society, and how to protect freedom of expression online.');
	}
}