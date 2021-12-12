import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import 'animate.css';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor(private countryService: CountryService) { }
  
  search( term: string ) {
    this.isError = false;
    this.term = term;
    this.countryService
      .searchCapital(this.term)
      .subscribe(
        (response) => {
          console.log(this.countries);
          this.countries = response;
        },
        (error) => {
          this.isError = true;
          this.countries = [];
        }
      );
    this.term = '';
  }
  suggestions( term:string ) {
    this.isError = false; 
  }
}
