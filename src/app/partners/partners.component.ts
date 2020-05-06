import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Our Partners | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/partners/social.png');
        this.meta.setGlobalDescription('We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN.');
    }
}
