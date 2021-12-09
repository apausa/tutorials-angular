import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input()  placeholder: string = '';

  public debouncer: Subject<string> = new Subject();
  public term: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
        this.onDebounce.emit(value);
      })
  }
  search() { this.onEnter.emit( this.term ); }
  isPressed() { this.debouncer.next(this.term); }
}
