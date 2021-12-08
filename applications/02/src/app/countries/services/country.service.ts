import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private COUNTRIES_API: string = "https://restcountries.com/v3.1";
  constructor( private http: HttpClient ) { }

  searchCountry(term: string): Observable<any> {
    const url = `${ this.COUNTRIES_API }/name/${ term }`;
    return this.http
      .get( url )
      .pipe(
        catchError( error => of([]))
      )
  }
}

