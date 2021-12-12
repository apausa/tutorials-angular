import { Component } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  public REGIONS: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public isOn: string = '';

  constructor () {};

  retrieveClassOf(region: string): string {
    return (region === this.isOn)
    ? 'btn btn-primary'
    : 'btn-outline-primary'
  }

  turnOn(region: string) {
    this.isOn = region;
  }
}
