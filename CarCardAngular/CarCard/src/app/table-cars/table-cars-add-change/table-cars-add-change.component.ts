import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, range } from 'rxjs';
import { objectCars } from 'src/data.types';

@Component({
  selector: 'app-table-cars-add-change',
  templateUrl: './table-cars-add-change.component.html',
  styleUrls: ['./table-cars-add-change.component.scss']
})
export class TableCarsAddChangeComponent implements OnInit {

  public carsDataControl!: FormGroup;
  public checkValidButton: boolean = true;

  public years: Array<number> = [];
  private rangeYears: Observable<number> = range(1900, (new Date().getFullYear() - 1899) );

  constructor(
    public dialogRef: MatDialogRef<TableCarsAddChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: objectCars,
  ) {}

  public onYesClick(): void {
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
    this.rangeYears.subscribe( ( value ) =>{
      this.years.push(value);
    } );


    this.carsDataControl = new FormGroup({
      name: new FormControl( this.data.name, [ Validators.minLength(1), Validators.required ] ),
      yearsIssue: new FormControl( this.data.yearsIssue, [ Validators.required ] ),
      carAccident: new FormControl( this.data.carAccident ),
      price: new FormControl( this.data.price, [ Validators.required, this.validatePriceCar ] ),
    });

    this.carsDataControl.valueChanges.subscribe( (value) => {
      this.data = value
    } );
    this.carsDataControl.statusChanges.subscribe( (status) => {
      status == "VALID" ? this.checkValidButton = false : this.checkValidButton = true;
    } );

  }

  private validatePriceCar( control: AbstractControl ): ValidationErrors | null {
    if( control.value < 0 ){
      return { ["message"]: "Price must be more 0" };
    }
    return null;
  } 

}
