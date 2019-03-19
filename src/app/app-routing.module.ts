import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AboutAppComponent} from "./about-app/about-app.component";
import {AboutNetworkComponent} from "./about-network/about-network.component";
import {EventsComponent} from "./events/events.component";
import {FaqComponent} from "./faq/faq.component";
import {HomeComponent} from "./home/home.component";
import {PageLayoutComponent} from "./page-layout/page-layout.component";
import {
  PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {ServiceTermsComponent} from "./service-terms/service-terms.component";
import {WhyOrchidComponent} from "./why-orchid/why-orchid.component";

// TODO: add a default route
// TODO: deal with WhatIsOrchidComponent

const routes: Routes = [{
  path: "",
  component: PageLayoutComponent,
  children: [
    {path: "", component: HomeComponent},
    {path: "app", component: AboutAppComponent},
    {path: "network", component: AboutNetworkComponent},
    {path: "why-orchid", component: WhyOrchidComponent},
    {path: "faq", component: FaqComponent},
    {path: "events", component: EventsComponent},
    {path: "privacy-policy", component: PrivacyPolicyComponent},
    {path: "service-terms", component: ServiceTermsComponent}
  ]
}];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
