import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  constructor() { }

    ngOnInit() { }

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
