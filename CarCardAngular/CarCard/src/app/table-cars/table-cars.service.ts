import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class TableCarsService {



  private Cars: Array<{
    name: String,
    yearsIssue: Number,
    carAccident: boolean,
    price: Number
  }> = [
    { name: 'Toyota Celica', yearsIssue: 2011, carAccident: true, price: 35000},
    { name: 'Ford Mondeo', yearsIssue: 2020, carAccident: false, price: 32000 },
    { name: 'Porsche Boxster', yearsIssue: 2000, carAccident: true, price: 72000 }
  ]

  constructor(
    private _http: HttpClient,
  ) { 

  }


  public getAllCars(): Array<{ name: String, yearsIssue: Number, carAccident: boolean, price: Number}>{
    return this.Cars;
  }

  public removeCar( index: number ): void{
    console.log(this.Cars)
    console.log(index)
    this.Cars.splice( index, 1 );
    console.log(this.Cars)
  }

  public consoleAll(){
    console.log( this.Cars );
  }

}
