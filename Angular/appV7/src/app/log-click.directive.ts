import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  @Output() changes = new EventEmitter<number>();
  private _counter: number = 0;

  @HostListener("click") onclick() {
    this._counter++;
    this.changes.emit(this._counter);
  }

}
