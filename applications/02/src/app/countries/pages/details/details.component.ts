import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public country: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( switchMap(({ id }): any => this.countryService.getCountryByAlpha(id)))
      .subscribe((country): any => {
        this.country = country
        console.log(country);
      })
  }
}
