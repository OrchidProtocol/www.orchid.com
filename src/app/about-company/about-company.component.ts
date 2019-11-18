import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  constructor( private meta: MetaService ) { }

    ngOnInit() {
        this.meta.setGlobalTitle('About the Open Internet | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/company/social.png');
        this.meta.setGlobalDescription('Orchid was founded in 2017 to help restore the open and accessible Internet for everyone. Since then, we have grown an incredible team based in San Francisco and Berlin that is releasing the Orchid tokenized VPN in Q4 2019.');
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
