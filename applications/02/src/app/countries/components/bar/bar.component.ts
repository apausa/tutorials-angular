import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject();
  public term: string = '';

  ngOnInit() {
    this.debouncer
      .subscribe( value => {
        this.onDebounce.emit(value);
      })
  }
  search() { this.onEnter.emit( this.term ); }
  isPressed() { this.debouncer.next(this.term); }
}
