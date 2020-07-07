import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NewsletterSignupFeaturesComponent } from './newsletter-signup-features/newsletter-signup-features.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { JoinComponent } from './join/join.component';
import { OxtComponent } from './oxt/oxt.component';
import { PreferredProvidersComponent } from './preferredproviders/preferredproviders.component';
import { PartnersComponent } from './partners/partners.component';
import { PodcastHeroComponent } from './podcast-hero/podcast-hero.component';
import { PodcastPlatformsComponent } from './podcast-platforms/podcast-platforms.component';

import { PodcastComponent } from './podcast/podcast.component';
import { PodcastEp1Component } from './podcast-ep1/podcast.component';
import { PodcastEp2Component } from './podcast-ep2/podcast.component';
import { PodcastEp3Component } from './podcast-ep3/podcast.component';
import { PodcastEp4Component } from './podcast-ep4/podcast.component';

import { WhereOXTComponent } from './where-oxt/where-oxt.component';
import { SetupVideoSectionComponent } from './setup-video-section/setup-video-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';
import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { I18nModule } from './i18n/i18n.module';
import { MetaService } from './MetaService';

@NgModule({
  declarations: [
    AppComponent,
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
    NewsletterSignupFeaturesComponent,
    PageLayoutComponent,
    FaqComponent,
    ContactComponent,
    AboutCompanyComponent,
    JoinComponent,
    OxtComponent,
    PreferredProvidersComponent,
    PartnersComponent,
    PodcastHeroComponent,
    PodcastPlatformsComponent,
    PodcastComponent,
    PodcastEp1Component,
    PodcastEp2Component,
    PodcastEp3Component,
    PodcastEp4Component,
    NewsletterSignupPage,
    WhereOXTComponent,
    VideoSectionComponent,
    SetupVideoSectionComponent,
    NotFoundComponent,
    WebinarLPComponent
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
