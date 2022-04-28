import { Injectable, OnInit } from '@angular/core';


@Injectable()

export class TableCarsService{

  private Cars: Array<{
    name: String,
    yearsIssue: Number,
    carAccident: Boolean,
    price: Number
  }> = [
    { name: "Porsche Boxter", yearsIssue: 2012, carAccident: true , price: 72000 },
    { name: "Ford Mondeo", yearsIssue: 2013, carAccident: false , price: 32000 },
    { name: "Porsche Boxter", yearsIssue: 2015, carAccident: true , price: 72000 },
    { name: "Toyota Celica", yearsIssue: 2018, carAccident: false , price: 35000 }
  ];

  constructor() { 

  }


  public getAllCars(): Array<{name: String, yearsIssue: Number, carAccident: Boolean, price: Number}>{
    return this.Cars;
  }

  public removeCar( index: {name: String, yearsIssue: Number, carAccident: boolean, price: Number} ): void{
    const indexCar: number = this.Cars.indexOf(index);
    if( indexCar != -1 ){
      this.Cars.splice( indexCar , 1 )
    }
  }

  public addCar( car: {name: String, yearsIssue: Number, carAccident: boolean, price: Number} ): void{
    this.Cars.push(car)
  }

  public consoleAll(){
    console.log( this.Cars );
  }

}
