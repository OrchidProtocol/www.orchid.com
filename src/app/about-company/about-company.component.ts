import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-about-company',
    templateUrl: './about-company.component.html',
    styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

    fragment: any;

    constructor(private meta: MetaService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.meta.setGlobalTitle('About the Open Accessible Internet | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/company/splash/social.png');
        this.meta.setGlobalDescription('We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN.');

        this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
        try {
            if (this.fragment) {
                document.querySelector('#' + this.fragment).scrollIntoView();
            }
        } catch (e) { }
    }

    go_sec() {
        window.location.href = "https://www.sec.gov/Archives/edgar/data/1721086/000172108618000001/xslFormDX01/primary_doc.xml";
    }

    go_press() {
        let kit = "";

        if (window && "location" in window && "protocol" in window.location &&
            "pathname" in window.location && "host" in window.location) {
            kit = window.location.protocol + "//" + window.location.host + "/assets/press/OrchidPressKit.zip";
        } else {
            kit = "https://github.com/orchidprotocol/presskit";
        }

        window.location.href = kit;
    }
}
