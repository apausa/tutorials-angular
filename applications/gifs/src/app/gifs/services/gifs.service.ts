import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private API: string = `https://api.giphy.com/v1/gifs/search`;
  private API_KEY: string = `hsgPiDQDbNOdm8iqgbGb9MDaWPtNZopg`;
  private _history: string[] = [];
  public results: any[] = [];

  constructor(private http: HttpClient) {};
  get history() { return [...this._history] };

  search(query: string) {
    query = query.trim().toLocaleLowerCase();
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
    this.http
      .get(`${this.API}?api_key=${this.API_KEY}&q=${query}&limit=10`)
      .subscribe( (response: any) => { 
        console.log(response);
        this.results = response.data; 
  })}
}
