import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-2021-slides',
    templateUrl: './slides.component.html',
    styleUrls: ['./slides.component.scss'],
})
export class Slides2021Component implements OnInit {

    constructor(
        private meta: MetaService,
    ) {

    }

    ngOnInit() {
        this.meta.setGlobalTitle('Decentralization is the new encryption | Orchid');
        this.meta.setGlobalDescription('Decentralization is the new encryption presentation - how decentralized and encrypted technologies complement each other for better privacy solutions.');
    }
}