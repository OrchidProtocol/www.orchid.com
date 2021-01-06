import { Routes } from "@angular/router";

import { AboutCompanyComponent } from "./about-company/about-company.component";
import { AboutNetworkComponent } from "./about-network/about-network.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { EventsComponent } from "./events/events.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { DownloadComponent } from "./download/download.component";
import { PageLayoutComponent } from "./page-layout/page-layout.component";
import {
	PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {
	MobilePrivacyPolicyComponent
} from "./mobile-privacy-policy/mobile-privacy-policy.component";
import { ServiceTermsComponent } from "./service-terms/service-terms.component";
import { VisionComponent } from "./vision/vision.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { JoinComponent } from './join/join.component';
import { PreferredProvidersComponent } from './preferredproviders/preferredproviders.component';
import { OxtComponent } from './oxt/oxt.component';
import { PartnersComponent } from './partners/partners.component';

import { PodcastComponent } from './podcast/podcast.component';
import { PodcastEp1Component } from './podcast-ep1/podcast.component';
import { PodcastEp2Component } from './podcast-ep2/podcast.component';
import { PodcastEp3Component } from './podcast-ep3/podcast.component';
import { PodcastEp4Component } from './podcast-ep4/podcast.component';
import { PodcastEp5Component } from './podcast-ep5/podcast.component';
import { PodcastEp6Component } from './podcast-ep6/podcast.component';
import { PodcastEp7Component } from './podcast-ep7/podcast.component';
import { PodcastEp8Component } from './podcast-ep8/podcast.component';
import { PodcastEp9Component } from './podcast-ep9/podcast.component';
import { PodcastEp10Component } from './podcast-ep10/podcast.component';
import { PodcastEp11Component } from './podcast-ep11/podcast.component';
import { PodcastEp12Component } from './podcast-ep12/podcast.component';
import { PodcastEp13Component } from './podcast-ep13/podcast.component';
import { PodcastEp14Component } from './podcast-ep14/podcast.component';
import { PodcastEp15Component } from './podcast-ep15/podcast.component';
import { PodcastEp16Component } from './podcast-ep16/podcast.component';
import { PodcastEp17Component } from './podcast-ep17/podcast.component';
import { PodcastEp18Component } from './podcast-ep18/podcast.component';
import { PodcastEp19Component } from './podcast-ep19/podcast.component';
import { PodcastEp20Component } from './podcast-ep20/podcast.component';
import { PodcastEp21Component } from './podcast-ep21/podcast.component';
import { PodcastEp22Component } from './podcast-ep22/podcast.component';
import { PodcastEp23Component } from './podcast-ep23/podcast.component';
import { PodcastEp24Component } from './podcast-ep24/podcast.component';
import { PodcastEp25Component } from './podcast-ep25/podcast.component';
import { PodcastEp26Component } from './podcast-ep26/podcast.component';
import { PodcastEp27Component } from './podcast-ep27/podcast.component';
import { PodcastEp28Component } from './podcast-ep28/podcast.component';
import { PodcastEp29Component } from './podcast-ep29/podcast.component';
import { PodcastEp30Component } from './podcast-ep30/podcast.component';

import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';

export const routes: Routes = [
	{
		path: "",
		component: PageLayoutComponent,
		children: [
			{ path: "", component: HomeComponent },
			{ path: "app", redirectTo: "download" },
			{ path: "app.html", redirectTo: "download" },
			{ path: "network", component: AboutNetworkComponent },
			{ path: "network.html", redirectTo: "network" },
			{ path: "how-it-works", component: HowItWorksComponent },
			{ path: "how-it-works.html", redirectTo: "how-it-works" },
			{ path: "vision", component: VisionComponent },
			{ path: "vision.html", redirectTo: "vision" },
			{ path: "about-us", component: AboutCompanyComponent },
			{ path: "about-us.html", redirectTo: "about-us" },
			{ path: "faq", component: FaqComponent },
			{ path: "faq.html", redirectTo: "faq" },
			{ path: "contact", component: ContactComponent },
			{ path: "download", component: DownloadComponent },
			{ path: "download.html", redirectTo: "download" },
			{ path: "events", component: EventsComponent },
			{ path: "events.html", redirectTo: "events" },
			{ path: "join", component: JoinComponent },
			{ path: "join.html", redirectTo: "join" },
			{ path: "webinar", component: WebinarLPComponent },
			{ path: "privacy-policy", component: PrivacyPolicyComponent },
			{ path: "mobile-privacy-policy", component: MobilePrivacyPolicyComponent },
			{ path: "privacy-policy.html", redirectTo: "privacy-policy" },
			{ path: "mobile-privacy-policy.html", redirectTo: "mobile-privacy-policy" },
			{ path: "service-terms", component: ServiceTermsComponent },
			{ path: "service-terms.html", redirectTo: "service-terms" },
			{ path: "oxt", component: OxtComponent },
			{ path: "oxt.html", redirectTo: "oxt" },
			{ path: "preferredproviders", component: PreferredProvidersComponent },
			{ path: "preferredproviders.html", redirectTo: "preferredproviders" },
			{ path: "partners", component: PartnersComponent },
			{ path: "partners.html", redirectTo: "partners" },
			{ path: "podcast", component: PodcastComponent },
			{ path: "podcast.html", redirectTo: "podcast" },
			{ path: "podcast/episode-1-interview-with-rich-starpoli", component: PodcastEp1Component },
			{ path: "podcast/episode-1-interview-with-rich-starpoli.html", redirectTo: "podcast/episode-1-interview-with-rich-starpoli" },
			{ path: "podcast/episode-2-vinny-lingham", component: PodcastEp2Component },
			{ path: "podcast/episode-2-vinny-lingham.html", redirectTo: "podcast/episode-2-vinny-lingham" },
			{ path: "podcast/episode-3-jyri-engestrom", component: PodcastEp3Component },
			{ path: "podcast/episode-3-jyri-engestrom.html", redirectTo: "podcast/episode-3-jyri-engestrom" },
			{ path: "podcast/episode-4-roger-ver", component: PodcastEp4Component },
			{ path: "podcast/episode-4-roger-ver.html", redirectTo: "podcast/episode-4-roger-ver" },
			{ path: "podcast/episode-5-jehan-chu", component: PodcastEp5Component },
			{ path: "podcast/episode-5-jehan-chu.html", redirectTo: "podcast/episode-5-jehan-chu" },
			{ path: "podcast/episode-6-paul-veradittakit", component: PodcastEp6Component },
			{ path: "podcast/episode-6-paul-veradittakit.html", redirectTo: "podcast/episode-6-paul-veradittakit" },
			{ path: "podcast/episode-7-alexander-lloyd", component: PodcastEp7Component },
			{ path: "podcast/episode-7-alexander-lloyd.html", redirectTo: "podcast/episode-7-alexander-lloyd" },
			{ path: "podcast/episode-8-cindy-cohn", component: PodcastEp8Component },
			{ path: "podcast/episode-8-cindy-cohn.html", redirectTo: "podcast/episode-8-cindy-cohn" },
			{ path: "podcast/episode-9-david-chaum", component: PodcastEp9Component },
			{ path: "podcast/episode-9-david-chaum.html", redirectTo: "podcast/episode-9-david-chaum" },
			{ path: "podcast/episode-10-ben-bartlett", component: PodcastEp10Component },
			{ path: "podcast/episode-10-ben-bartlett.html", redirectTo: "podcast/episode-10-ben-bartlett" },
			{ path: "podcast/episode-11-richard-muirhead", component: PodcastEp11Component },
			{ path: "podcast/episode-11-richard-muirhead.html", redirectTo: "podcast/episode-11-richard-muirhead" },
			{ path: "podcast/episode-12-ken-seiff", component: PodcastEp12Component },
			{ path: "podcast/episode-12-ken-seiff.html", redirectTo: "podcast/episode-12-ken-seiff" },
			{ path: "podcast/episode-13-brian-j-fox", component: PodcastEp13Component },
			{ path: "podcast/episode-13-brian-j-fox.html", redirectTo: "podcast/episode-13-brian-j-fox" },
			{ path: "podcast/episode-14-juan-gilbert", component: PodcastEp14Component },
			{ path: "podcast/episode-14-juan-gilbert.html", redirectTo: "podcast/episode-14-juan-gilbert" },
			{ path: "podcast/episode-15-val-mack", component: PodcastEp15Component },
			{ path: "podcast/episode-15-val-mack.html", redirectTo: "podcast/episode-15-val-mack" },
			{ path: "podcast/episode-16-jason-brett", component: PodcastEp16Component },
			{ path: "podcast/episode-16-jason-brett.html", redirectTo: "podcast/episode-16-jason-brett" },
			{ path: "podcast/episode-17-dawn-song.html",  redirectTo: "podcast/episode-17-dawn-song" },
			{ path: "podcast/episode-17-dawn-song", component: PodcastEp17Component },
			{ path: "podcast/episode-18-alex-gluchowski.html", redirectTo: "podcast/episode-18-alex-gluchowski" },
			{ path: "podcast/episode-18-alex-gluchowski", component: PodcastEp18Component },
			{ path: "podcast/episode-19-david-pan.html", redirectTo: "podcast/episode-19-david-pan" },
			{ path: "podcast/episode-19-david-pan", component: PodcastEp19Component },
			{ path: "podcast/episode-20-neeraj-khandelwal.html", redirectTo: "podcast/episode-20-neeraj-khandelwal" },
			{ path: "podcast/episode-20-neeraj-khandelwal", component: PodcastEp20Component },
			{ path: "podcast/episode-21-felipe-erazo.html", redirectTo: "podcast/episode-21-felipe-erazo" },
			{ path: "podcast/episode-21-felipe-erazo", component: PodcastEp21Component },
			{ path: "podcast/episode-22-adriana-hamacher.html", redirectTo: "podcast/episode-22-adriana-hamacher" },
			{ path: "podcast/episode-22-adriana-hamacher", component: PodcastEp22Component },
			{ path: "podcast/episode-23-roneil-rumburg.html", redirectTo: "podcast/episode-23-roneil-rumburg" },
			{ path: "podcast/episode-23-roneil-rumburg", component: PodcastEp23Component },
			{ path: "podcast/episode-24-brad-kam.html", redirectTo: "podcast/episode-24-brad-kam" },
			{ path: "podcast/episode-24-brad-kam", component: PodcastEp24Component },
			{ path: "podcast/episode-25-roger-huang.html", redirectTo: "podcast/episode-25-roger-huang" },
			{ path: "podcast/episode-25-roger-huang", component: PodcastEp25Component },
			{ path: "podcast/episode-26-anne-ahola-ward.html", redirectTo: "podcast/episode-26-anne-ahola-ward" },
			{ path: "podcast/episode-26-anne-ahola-ward", component: PodcastEp26Component },
			{ path: "podcast/episode-27-kurt-rohloff.html", redirectTo: "podcast/episode-27-kurt-rohloff" },
			{ path: "podcast/episode-27-kurt-rohloff", component: PodcastEp27Component },
			{ path: "podcast/episode-28-andreas-antonopoulos.html", redirectTo: "podcast/episode-28-andreas-antonopoulos" },
			{ path: "podcast/episode-28-andreas-antonopoulos", component: PodcastEp28Component },
			{ path: "podcast/episode-29-yaniv-tal.html", redirectTo: "podcast/episode-29-yaniv-tal" },
			{ path: "podcast/episode-29-yaniv-tal", component: PodcastEp29Component },
			{ path: "podcast/episode-30-franck-nouyrigat.html", redirectTo: "podcast/episode-30-franck-nouyrigat" },
			{ path: "podcast/episode-30-franck-nouyrigat", component: PodcastEp30Component },
			{ path: "newsletter-signup", component: NewsletterSignupPage },
			{ path: "newsletter-signup.html", redirectTo: 'newsletter-signup' },
			{ path: "**", component: NotFoundComponent }
		]
	},
	{ path: "index.html", redirectTo: "" },
];
