import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private API_PARAMS: string = "name,flag,population,cca2"
  private API_COUNTRIES: string = "https://restcountries.com/v3.1";
  constructor( private http: HttpClient ) { }

  get params () {
    return new HttpParams().set('fields', this.API_PARAMS)
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${ this.API_COUNTRIES }/name/${ term }`;
    return this.http.get<Country[]>( url, { params: this.params} )
      .pipe(
      );
  }
  searchCapital(term: string): Observable<Country[]> {
    const url = `${ this.API_COUNTRIES }/capital/${ term }`;
    return this.http.get<Country[]>( url, { params: this.params} )
      .pipe(
      );
  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${ this.API_COUNTRIES }/region/${ term }`;
    return this.http.get<Country[]>( url, { params: this.params} )
      .pipe(
      );
  }
  getCountryByAlpha(term: string): Observable<Country[]> {
    const url = `${ this.API_COUNTRIES }/alpha/${ term }`;
    return this.http.get<Country[]>( url );
  }
}
