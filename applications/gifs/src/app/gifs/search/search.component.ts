import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild ('query') query!: ElementRef<HTMLInputElement>;

  search() {
    const value = this.query.nativeElement.value
    console.log(value);
    this.query.nativeElement.value = "";
  }
}
