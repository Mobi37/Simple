import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { range } from 'rxjs';
import { objectCars } from 'src/data.types';

@Component({
  selector: 'app-table-cars-add',
  templateUrl: './table-cars-add.component.html',
  styleUrls: ['./table-cars-add.component.scss']
})
export class TableCarsAddComponent{

  public years: Array<number> = []
  rangeYears = range(1900, 123).subscribe( (value) => {
    this.years.push(value);
  } )

  constructor(
    public dialogRef: MatDialogRef<TableCarsAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: objectCars,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
