import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  search( term: string ) {
    this.isError = false;
    this.countryService
      .searchCountry(this.term)
      .subscribe(
        (response) => {
          this.countries = response;
          console.log(this.countries);
        },
        (error) => {
          this.isError = true;
          this.countries = [];
        }
      );
    this.term = '';
  }
}
