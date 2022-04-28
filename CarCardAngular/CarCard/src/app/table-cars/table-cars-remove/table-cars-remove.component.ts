import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, range } from 'rxjs';

export interface DialogDataCars {
  name: string;
  yearsIssue: Number;
  carAccident: boolean;
  price: Number;
}

@Component({
  selector: 'app-table-cars-remove',
  templateUrl: './table-cars-remove.component.html',
  styleUrls: ['./table-cars-remove.component.scss']
})
export class TableCarsRemoveComponent {

  public years: Array<number> = []
  rangeYears = range(1900, 123).subscribe( (value) => {
    this.years.push(value);
  } )

  constructor(
    public dialogRef: MatDialogRef<TableCarsRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCars,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

}
