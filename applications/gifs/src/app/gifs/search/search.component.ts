import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {



  @ViewChild ('query') query!: ElementRef<HTMLInputElement>;

  search(event: string) {
    console.log(this.query.nativeElement.value);
  }
}
