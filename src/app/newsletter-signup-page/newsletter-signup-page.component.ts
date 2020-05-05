import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'newsletter-signup-page',
    templateUrl: './newsletter-signup-page.component.html',
    styleUrls: ['./newsletter-signup-page.component.scss']
})
export class NewsletterSignupPage implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Stay up to date | Orchid');
        this.meta.setGlobalDescription('Stay up to date on privacy news, commentary, and product updates from Orchid.');
    }
}
