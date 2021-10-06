import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
	selector: 'app-podcast',
	templateUrl: './podcast.component.html',
	styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp68Component implements OnInit {

	constructor(private meta: MetaService) { }

	ngOnInit() {
		this.meta.setGlobalTitle('Episode 68: Julian Zawistowski');
		this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_JulianZawistowski.png');
		this.meta.setGlobalDescription('Host Derek E. Silva joins Julian Zawistowski, Director of Golem Foundation, a decentralized marketplace for computing power. A great conversation on the power of decentralized governance, breaking corporate data silos, and empowering individuals to put privacy first by controlling their own data.');
	}
}