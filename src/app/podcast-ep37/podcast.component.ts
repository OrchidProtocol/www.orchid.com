import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-podcast',
    templateUrl: './podcast.component.html',
    styleUrls: ['../podcast/podcast.component.scss']
})
export class PodcastEp37Component implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('Episode 37: David Henkel-Wallace');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/podcast/DavidHenkelWallace_Social.png');
        this.meta.setGlobalDescription('We go down the rabbit hole with David “Gumby” Henkel-Wallace, partner at Rodin AI, who founded the first open source company Cygnus that Red Hat acquired in 1999 to become a global powerhouse. The tech pioneer shares his thoughts on the democratization of encryption, how open source has become weaponized, and the future impact it has on data privacy.');
    }
}