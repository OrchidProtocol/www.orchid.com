import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-priv8',
    templateUrl: './priv8.component.html',
    styleUrls: ['./priv8.component.scss']
})
export class Priv8 implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/social.png');
        this.meta.setGlobalDescription('');
        document.body.classList.add('no-banner');
    }
}
