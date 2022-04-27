import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()

export class TableCarsService{



  private Cars: Array<{
    id: number,
    name: String,
    yearsIssue: Number,
    carAccident: boolean,
    price: Number
  }> = [
    { id: 0, name: "Porsche Boxter", yearsIssue: 2012, carAccident: true , price: 72000 },
    { id: 1, name: "Ford Mondeo", yearsIssue: 2013, carAccident: false , price: 32000 },
    { id: 2, name: "Porsche Boxter", yearsIssue: 2015, carAccident: true , price: 72000 },
    { id: 3, name: "Toyota Celica", yearsIssue: 2018, carAccident: false , price: 35000 }
  ];

  constructor() { 

  }


  public getAllCars(): Array<{id: number, name: String, yearsIssue: Number, carAccident: boolean, price: Number}>{
    return this.Cars;
  }

  public removeCar( index: {id: number, name: String, yearsIssue: Number, carAccident: boolean, price: Number} ): void{
    if( this.Cars.indexOf(index) != -1 ){
      this.Cars.splice( this.Cars.indexOf(index) , 1 )
    }
  }

  public consoleAll(){
    console.log( this.Cars );
  }

}
