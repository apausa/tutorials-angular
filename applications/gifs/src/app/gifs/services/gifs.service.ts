import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = [];
  
  get history() {
    return [...this._history]
  }

  search(query: string) {
    this._history.unshift(query);
    console.log(this._history)
  }
}
