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
        this.meta.setGlobalTitle('2021 Slides | Orchid');
    }
}