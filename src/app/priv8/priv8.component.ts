import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MetaService } from '../MetaService';
import BrellaJSON from "../../assets/brella-priv8-backup.json"

function nth(d) {
    if (d > 3 && d < 21) return d + "th";
    switch (d % 10) {
        case 1: return d + "st";
        case 2: return d + "nd";
        case 3: return d + "rd";
        default: return d + "th";
    }
}

function trailingZero(input) {
    if (input < 10) {
        return '0' + input;
    }
    return input;
}
function formatTime(input) {
    let hours = input.getHours();
    let AMPM = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
    }
    return `${hours}:${trailingZero(input.getMinutes())} ${AMPM} (ET)`;
    // (${timeZones[input.getTimezoneOffset()]})
}

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const timeZones = {
    300: 'ET',
    360: 'CT',
}

const agenda = [];
for (let index = 0; index < BrellaJSON.data.length; index++) {
    const element = BrellaJSON.data[index];

    const start = new Date(
        new Date(element.attributes['start-time-in-time-zone']).toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const end = new Date(
        new Date(element.attributes['end-time-in-time-zone']).toLocaleString("en-US", { timeZone: "America/New_York" })
    );

    let dayInfo = undefined;

    if (
        agenda.length === 0 ||
        agenda[agenda.length - 1].raw_start.getDate() !== start.getDate()
    ) {
        dayInfo = `${days[start.getDay()]} ● ${nth(start.getDate())} of ${months[start.getMonth()]}`;
    }

    const output = {
        title: element.attributes.title,
        duration: element.attributes.duration,
        raw_start: start,
        raw_end: end,
        start: formatTime(start),
        end: formatTime(end),
        speakers: [],
        day: days[start.getDay()],
        dayInfo,
        content: [],
    }
    if (element.relationships && element.relationships['speaker-assignments']) {
        for (let index = 0; index < element.relationships['speaker-assignments'].data.length; index++) {
            const speakerAssignment = element.relationships['speaker-assignments'].data[index];
            output.speakers.push(
                BrellaJSON.speakers[Number(speakerAssignment.id)]
            );
        }
    }
    if (output.title) {
        try {
            output.content = element.attributes.content.blocks;
        } catch(e) {}
        agenda.push(output);
    }
}

@Component({
    selector: 'app-priv8',
    templateUrl: './priv8.component.html',
    styleUrls: ['./priv8.component.scss']
})
export class Priv8 implements OnInit {
    year: number;
    expandParticipate: boolean = false;
    agenda: any = [];

    constructor(private meta: MetaService) {
        this.year = new Date().getFullYear();
        /*const BrellaRelationships = {};
        for (let index = 0; index < BrellaJSON.included.length; index++) {
            const element = BrellaJSON.included[index];
            console.log(element);
        }*/
        this.agenda = agenda;
    }

    onParticipateClick() {
        this.expandParticipate = !this.expandParticipate;
    }

    ngOnInit() {
        this.meta.setGlobalTitle('Priv8 | Orchid');
        this.meta.setGlobalImage('https://www.orchid.com/assets/img/priv8/priv8_social.png');
        this.meta.setGlobalDescription('Join us for an in-depth discussion on the state of privacy in today’s world with the foremost experts, policymakers, and builders.');
        const doc = typeof document !== "undefined" && document;
        if (doc) {
            doc.body.classList.add('no-banner');
        }
    }
}
