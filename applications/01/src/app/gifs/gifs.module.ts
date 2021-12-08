import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './pages/page/page.component';
import { SearchComponent } from './pages/search/search.component';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  declarations: [
    PageComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports: [
    PageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
