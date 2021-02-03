import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-priv8',
    templateUrl: './priv8.component.html',
    styleUrls: ['./priv8.component.scss']
})
export class Priv8 implements OnInit {
    year: number;
    expandParticipate: boolean = false;

    constructor(private meta: MetaService) {
        this.year = new Date().getFullYear();
    }

    onParticipateClick() {
        this.expandParticipate = !this.expandParticipate;
    }

    ngOnInit() {
        this.meta.setGlobalTitle('Priv8 | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/priv8/priv8_social.png');
        this.meta.setGlobalDescription('Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders.');
        document.body.classList.add('no-banner');
    }
}
