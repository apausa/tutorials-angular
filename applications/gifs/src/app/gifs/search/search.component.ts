import { Component, ElementRef, ViewChild } from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild ('query') query!: ElementRef<HTMLInputElement>;
  constructor (private gifsService: GifsService) {};

  search() {
    const value = this.query.nativeElement.value;
    this.gifsService.search(value);
    this.query.nativeElement.value = "";
  }
}
