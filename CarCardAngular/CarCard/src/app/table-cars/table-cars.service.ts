import { Injectable, OnInit } from '@angular/core';
import { objectCars } from 'src/data.types';


@Injectable()

export class TableCarsService{

  private Cars: Array<objectCars> = [
    { name: "Porsche Boxter", yearsIssue: 2012, carAccident: true , price: 72000 },
    { name: "Ford Mondeo", yearsIssue: 2013, carAccident: false , price: 32000 },
    { name: "Porsche Boxter", yearsIssue: 2015, carAccident: true , price: 72000 },
    { name: "Toyota Celica", yearsIssue: 2018, carAccident: false , price: 35000 }
  ];

  constructor() { 

  }

  public getAllCars(): Array<objectCars>{
    return this.Cars;
  }

  public removeCar( index: objectCars ): void{
    const indexCar: number = this.Cars.indexOf(index);
    if( indexCar != -1 ){
      this.Cars.splice( indexCar , 1 )
    }
  }

  public addCar( car: objectCars ): void{
    this.Cars.push(car)
  }

  public changeCar( oldDataCar: objectCars, newDataCar: objectCars ): void{
    this.Cars[ this.Cars.indexOf( oldDataCar ) ] = newDataCar;
  }

}
