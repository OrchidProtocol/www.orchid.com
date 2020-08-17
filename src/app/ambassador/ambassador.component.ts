import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
	selector: 'app-ambassador',
	templateUrl: './ambassador.component.html',
	styleUrls: ['./ambassador.component.scss']
})

export class AmbassadorComponent implements OnInit {
	constructor(private meta: MetaService) { }

	ngOnInit() {
		//this.meta.clearAllTags();
		this.meta.setGlobalTitle('Ambassador program | Orchid');
		this.meta.setGlobalImage('https://www.orchid.com/assets/img/contact/social.png');
		this.meta.setGlobalDescription('Let\'s reclaim the Internet together!');
	}
}
