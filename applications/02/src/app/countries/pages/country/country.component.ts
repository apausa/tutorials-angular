import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  public term: string = 'Hello world';
  constructor() { }
  search() {
    console.log('hello')
  }
}
