import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
	selector: "app-preferredproviders",
	templateUrl: "./preferredproviders.component.html",
	styleUrls: ["./preferredproviders.component.scss"],
})

export class PreferredProvidersComponent implements OnInit {

	constructor(private meta: MetaService) { }

	ngOnInit() {
		this.meta.setGlobalTitle('Preferred Providers | Orchid');
		//this.meta.setGlobalDescription('');
	}

}
