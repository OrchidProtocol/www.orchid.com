import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { WhatIsOrchidComponent } from './what-is-orchid/what-is-orchid.component';
import { WhyOrchidComponent } from './why-orchid/why-orchid.component';
import { DevResourcesComponent } from './dev-resources/dev-resources.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
