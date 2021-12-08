import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailsComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class CountriesModule { }
