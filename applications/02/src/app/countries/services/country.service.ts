import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private COUNTRIES_API: string = "https://restcountries.com/v3.1";
  constructor( private http: HttpClient ) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${ this.COUNTRIES_API }/name/${ term }`;
    return this.http.get<Country[]>( url );
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `${ this.COUNTRIES_API }/capital/${ term }`;
    return this.http.get<Country[]>( url );
  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${ this.COUNTRIES_API }/region/${ term }`;
    return this.http.get<Country[]>( url );
  }
  getCountryByAlpha(term: string): Observable<Country[]> {
    const url = `${ this.COUNTRIES_API }/alpha/${ term }`;
    return this.http.get<Country[]>( url );
  }
}
