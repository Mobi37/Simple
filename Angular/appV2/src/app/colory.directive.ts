import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: "colory"
})
export class ColoryDirective {

  public countClick: number = 0;

  @HostBinding("style.color") myColor: string;
  @HostListener("click", ["$event"]) changeColor(event : Event): void{
    this.setRandoColor();
    this.countClick++;
    console.log(this.countClick);
  }

  public setRandoColor(): void{
    this.myColor = "#" + Math.floor( Math.random() * 16777215 ).toString();
  }

  constructor() { 
    this.myColor = "red";

    setTimeout(() => {
      this.myColor = "blue";
    }, 1000);
  }
}
