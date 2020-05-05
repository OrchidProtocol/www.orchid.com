import {Routes} from "@angular/router";

import {AboutCompanyComponent} from "./about-company/about-company.component";
import {AboutNetworkComponent} from "./about-network/about-network.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {EventsComponent} from "./events/events.component";
import {FaqComponent} from "./faq/faq.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {DownloadComponent} from "./download/download.component";
import {PageLayoutComponent} from "./page-layout/page-layout.component";
import {
    PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {
    MobilePrivacyPolicyComponent
} from "./mobile-privacy-policy/mobile-privacy-policy.component";
import {ServiceTermsComponent} from "./service-terms/service-terms.component";
import {VisionComponent} from "./vision/vision.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { JoinComponent } from './join/join.component';
import { OxtComponent } from './oxt/oxt.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';

export const routes: Routes = [
    {
	path: "",
	component: PageLayoutComponent,
	children: [
	    {path: "", component: HomeComponent},
	    {path: "app", redirectTo: "download"},
	    {path: "app.html", redirectTo: "download"},
	    {path: "network", component: AboutNetworkComponent},
	    {path: "network.html", redirectTo: "network"},
	    {path: "how-it-works", component: HowItWorksComponent},
	    {path: "how-it-works.html", redirectTo: "how-it-works"},
	    {path: "vision", component: VisionComponent},
	    {path: "vision.html", redirectTo: "vision"},
	    {path: "about-us", component: AboutCompanyComponent},
	    {path: "about-us.html", redirectTo: "about-us"},
	    {path: "faq", component: FaqComponent},
	    {path: "faq.html", redirectTo: "faq"},
	    {path: "contact", component: ContactComponent},
	    {path: "download", component: DownloadComponent},
	    {path: "download.html", redirectTo: "download"},
	    {path: "events", component: EventsComponent},
      {path: "events.html", redirectTo: "events"},
	    {path: "join", component: JoinComponent},
      {path: "join.html", redirectTo: "join"},
	    {path: "webinar", component: WebinarLPComponent},
	    {path: "privacy-policy", component: PrivacyPolicyComponent},
	    {path: "mobile-privacy-policy", component: MobilePrivacyPolicyComponent},
	    {path: "privacy-policy.html", redirectTo: "privacy-policy"},
	    {path: "mobile-privacy-policy.html", redirectTo: "mobile-privacy-policy"},
	    {path: "service-terms", component: ServiceTermsComponent},
      {path: "service-terms.html", redirectTo: "service-terms"},
	    {path: "oxt", component: OxtComponent},
		{path: "oxt.html", redirectTo: "oxt"},
		//{path: "partners", component: PartnersComponent},
		//{path: "partners.html", redirectTo: "partners"},
		{path: "newsletter-signup", component: NewsletterSignupPage},
		{path: "newsletter-signup.html", redirectTo: 'newsletter-signup'},
      {path: "**", component: NotFoundComponent}
	]
    },
    {path: "index.html", redirectTo: ""},
];
