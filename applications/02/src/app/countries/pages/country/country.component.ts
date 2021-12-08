import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  public term: string = 'Hello world';
  isError: boolean = false;
  constructor(private countryService: CountryService) { }

  search() {
    this.isError = false;
    this.countryService
      .searchCountry(this.term)
      .subscribe(
        (response) => {console.log(response)},
        (error) => { this.isError = true }
      );
  }
}
