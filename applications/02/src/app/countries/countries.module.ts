import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { DetailsComponent } from './pages/details/details.component';
import { TableComponent } from './components/table/table.component';
import { BarComponent } from './components/bar/bar.component';


@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailsComponent,
    TableComponent,
    BarComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class CountriesModule { }
