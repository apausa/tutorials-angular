import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private API: string = `https://api.giphy.com/v1/gifs/search`;
  private API_KEY: string = `hsgPiDQDbNOdm8iqgbGb9MDaWPtNZopg`;
  private _history: string[] = [];
  public results: any[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('history')) {
      this._history = JSON.parse(localStorage.getItem('history')!)
    }
  };
  get history() { return [...this._history] };

  search(query: string) {
    query = query.trim().toLocaleLowerCase();
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
    localStorage.setItem('history', JSON.stringify(this._history))
    this.http
      .get<SearchGifsResponse>(`${this.API}?api_key=${this.API_KEY}&q=${query}&limit=10`)
      .subscribe( (response) => { 
        console.log(response);
        this.results = response.data; 
  })}
}
