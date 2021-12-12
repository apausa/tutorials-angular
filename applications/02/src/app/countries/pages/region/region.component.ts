import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  public REGIONS: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public isOn: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];

  constructor (private countryService: CountryService) {};

  retrieveClassOf(region: string): string {
    return (region === this.isOn)
    ? 'btn btn-primary'
    : 'btn-outline-primary'
  }

  turnOn(region: string) {
    if ( region === this.isOn) return;
    this.isOn = region;
    this.countryService
      .searchRegion(this.isOn)
      .subscribe(
        (response) => { this.countries = response }
      )
  }
}
