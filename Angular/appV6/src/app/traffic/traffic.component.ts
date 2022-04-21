import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type TLColor = "red" | "yellow" | "green";


@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => TrafficComponent ),
    multi: true
  }]
})
export class TrafficComponent implements ControlValueAccessor {

  private _colors: TLColor[] = ["red", "yellow", "green"]
  private _currenColor: TLColor = "red";
  currenColor: TLColor = "red";
  propagateChange = (color: TLColor) => {};
  propagateTouch = (color: TLColor) => {};

  constructor() { }

  writeValue(color: TLColor): void {  

    this.currentColor = color;

  };

  get currentColor(): TLColor{
    return this._currenColor;
  }

  set currentColor(color: TLColor) {
    this._currenColor = color;
    this.propagateChange(color);
    this.propagateTouch(color);
  }


  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  };

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  };

  toggleDown(): void{
    this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 1) % 3]
  }

  toggleUp(): void{
    this.currentColor = this._colors[(this._colors.indexOf(this.currentColor) + 2) % 3]
  }

  switchColor(color:string): void{
    this.currentColor = color as TLColor ;
  }

}
