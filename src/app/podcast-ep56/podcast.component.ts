import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp56Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 56: Michael Caster');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/P8PEpisode_MichaelCaster.png');
        this.meta.setGlobalDescription('Derek E. Silva joins Michael Caster, the co-founder of Safeguard Defenders, a group helping human rights advocates protect civil liberties in Asia. They take a deep dive into how authoritarian governments are weaponizing Interpol,  the right to Internet access, and how Article 19 protects freedom of expression.');
    }
}