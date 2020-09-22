import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
    selector: 'app-oxt',
    templateUrl: './oxt.component.html',
    styleUrls: ['./oxt.component.scss']
})
export class OxtComponent implements OnInit {
    OXT_released_string:string = "";
    last_date_string:string = "";

    constructor(private meta: MetaService) { }

    ngOnInit() {
        this.meta.setGlobalTitle('OXT Digital Currency | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/oxt/social.png');
        this.meta.setGlobalDescription('OXT is an Ethereum (ERC-20) digital currency used to exchange value on the Orchid network. Orchid offers VPN privacy tools at an affordable cost.');

        let OXT_released = 367584352; // As of September 16th 2020
        const date_array = [
            {
                //September 16th
                date: 1600264800000,
                count: 0, //already included in the base OXT_released number
            },
            {
                //October 1st
                date: 1601560800000,
                count: 11025000 + 9000000,
            },
            {
                //October 6th
                date: 1601992800000,
                count: 355073 + 152825,
            },
            {
                //October 16th
                date: 1602856800000,
                count: 15525000,
            },
            {
                //November 1st
                date: 1604239200000,
                count: 11025000 + 7380000,
            },
            {
                //November 6th
                date: 1604671200000,
                count: 355075 + 152825,
            },
            {
                //November 16th
                date: 1605535200000,
                count: 15525000,
            },
            {
                //December 1st
                date: 1606831200000,
                count: 11025000 + 9000000,
            },
            {
                //December 6th
                date: 1607263200000,
                count: 355073 + 152825,
            },
            {
                //December 9th
                date: 1607522400000,
                count: 22470022 + 33790106,
            },
            {
                //2021 January 6
                date: 1609941600000,
                count: 152825,
            },
            {
                //2021 January 9
                date: 1610200800000,
                count: 3745004,
            },
            {
                //2021 February 6
                date: 1612620000000,
                count: 152825,
            },
            {
                //2021 February 9
                date: 1612879200000,
                count: 3745004,
            },
            {
                //2021 March 6
                date: 1615039200000,
                count: 152825,
            },
            {
                //2021 March 9
                date: 1615298400000,
                count: 3745004,
            },
            {
                //2021 April 6
                date: 1617717600000,
                count: 152825,
            },
            {
                //2021 April 9
                date: 1617976800000,
                count: 3745004,
            },
            {
                //2021 May 6
                date: 1620309600000,
                count: 152825,
            },
            {
                //2021 May 9
                date: 1620568800000,
                count: 3745004,
            },
            {
                //2021 June 6
                date: 1622988000000,
                count: 152825,
            },
            {
                //2021 June 9
                date: 1623247200000,
                count: 3745004,
            }
        ];

        let target_index = 0;
        for (let index = date_array.length-1; index >= 0; index--) {
            const element = date_array[index];
            if (element.date <= Date.now()) {
                target_index = index + 1;
                break;
            }
        }

        let last_date = 0;
        for (let index = 0; index < Math.min(date_array.length, target_index); index++) {
            const element = date_array[index];
            OXT_released += element.count;
            last_date = element.date;
        }

        const ld = new Date(last_date);

        this.OXT_released_string = OXT_released.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.last_date_string = `${ld.getMonth()+1}/${ld.getUTCDate()}/${ld.getFullYear()}`;
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
