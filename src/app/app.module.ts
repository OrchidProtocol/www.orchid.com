import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutNetworkComponent } from './about-network/about-network.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhyOrchidComponent } from './why-orchid/why-orchid.component';
import { EventsComponent } from './events/events.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServiceTermsComponent } from './service-terms/service-terms.component';
import { HomeComponent } from './home/home.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutAppComponent,
    AboutNetworkComponent,
    WhyOrchidComponent,
    EventsComponent,
    PrivacyPolicyComponent,
    ServiceTermsComponent,
    HomeComponent,
    NewsletterSignupComponent,
    PageLayoutComponent
  ],
  imports: [
    // TODO: how important is appId?
    BrowserModule.withServerTransition({appId: 'orchid-www'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
