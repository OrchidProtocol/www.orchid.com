import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';


@Component({
    selector: 'app-priv8poap',
    templateUrl: './priv8poap.component.html',
    styleUrls: ['./priv8poap.component.scss'],
})
export class Priv8PoapComponent implements OnInit {
    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Priv8 2021 POAP Claim | Orchid');
        this.meta.setGlobalDescription('Fill out this form to receive an email shortly with a link to claim your Priv8 POAP.');
        this.meta.setGlobalImage('');


        const doc = typeof document !== "undefined" && document;
        if (doc) {
            window.location.href = 'https://airtable.com/shrqGJSSwrsn6kH8f'
        }
    }
}