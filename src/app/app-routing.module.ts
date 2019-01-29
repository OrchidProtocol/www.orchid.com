import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhatIsOrchidComponent } from './what-is-orchid/what-is-orchid.component';
import { WhyOrchidComponent } from './why-orchid/why-orchid.component';
import { DevResourcesComponent } from './dev-resources/dev-resources.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServiceTermsComponent } from './service-terms/service-terms.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'what-is-orchid',
        component: WhatIsOrchidComponent
      },
      {
        path: 'why-orchid',
        component: WhyOrchidComponent
      },
      {
        path: 'dev-resources',
        component: DevResourcesComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'service-terms',
        component: ServiceTermsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
