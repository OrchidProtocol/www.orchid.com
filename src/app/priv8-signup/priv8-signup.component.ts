import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'priv8-signup',
    templateUrl: './priv8-signup.component.html',
    styleUrls: ['./priv8-signup.component.scss']
})
export class Priv8Signup implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Register for Priv8 | Orchid');
        this.meta.setGlobalDescription('Sign up for updates on the Priv8 conference.');
    }
}
