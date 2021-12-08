import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CountryComponent } from './countries/pages/country/country.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { DetailsComponent } from './countries/pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent, 
    pathMatch: 'full'
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'region',
    component: RegionComponent, 
  },
  {
    path: 'country/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
