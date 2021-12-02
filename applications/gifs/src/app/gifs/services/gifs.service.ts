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
    this._history = this._history.splice(0, 10);
    console.log(this._history)
  }
}
