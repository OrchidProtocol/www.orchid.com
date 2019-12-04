import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutNetworkComponent } from './about-network/about-network.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisionComponent } from './vision/vision.component';
import { EventsComponent } from './events/events.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MobilePrivacyPolicyComponent } from './mobile-privacy-policy/mobile-privacy-policy.component';
import { ServiceTermsComponent } from './service-terms/service-terms.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { NewsletterSignupHeroComponent } from './newsletter-signup-hero/newsletter-signup-hero.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { JoinComponent } from './join/join.component';
import { OxtComponent } from './oxt/oxt.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { I18nModule } from './i18n/i18n.module';
import { MetaService } from './MetaService';

@NgModule({
  declarations: [
    AppComponent,
    AboutAppComponent,
    AboutNetworkComponent,
    HowItWorksComponent,
    VisionComponent,
    EventsComponent,
    DownloadComponent,
    PrivacyPolicyComponent,
    MobilePrivacyPolicyComponent,
    ServiceTermsComponent,
    HomeComponent,
    NewsletterSignupComponent,
    NewsletterSignupHeroComponent,
    PageLayoutComponent,
    FaqComponent,
    ContactComponent,
    AboutCompanyComponent,
    JoinComponent,
    OxtComponent,
    NotFoundComponent
  ],
  imports: [
    // TODO: how important is appId?
    BrowserModule.withServerTransition({appId: 'orchid-www'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    I18nModule
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
