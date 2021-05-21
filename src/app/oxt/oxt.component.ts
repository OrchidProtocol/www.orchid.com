import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-oxt',
    templateUrl: './oxt.component.html',
    styleUrls: ['./oxt.component.scss']
})
export class OxtComponent implements OnInit {

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('OXT Digital Currency | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/oxt/social.png');
        this.meta.setGlobalDescription('OXT is an Ethereum (ERC-20) digital currency used to exchange value on the Orchid network. Orchid offers VPN privacy tools at an affordable cost.');
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
