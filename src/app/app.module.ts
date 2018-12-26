import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatIsOrchidComponent } from './what-is-orchid/what-is-orchid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { WhyOrchidComponent } from './why-orchid/why-orchid.component';
import { DevResourcesComponent } from './dev-resources/dev-resources.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatIsOrchidComponent,
    MainNavComponent,
    WhyOrchidComponent,
    DevResourcesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
