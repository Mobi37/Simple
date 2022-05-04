import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { range } from 'rxjs';
import { objectCars } from 'src/data.types';

@Component({
  selector: 'app-table-cars-change',
  templateUrl: './table-cars-change.component.html',
  styleUrls: ['./table-cars-change.component.scss']
})
export class TableCarsChangeComponent{

  public years: Array<number> = []
  rangeYears = range(1900, 123).subscribe( (value) => {
    this.years.push(value);
  } )

  constructor(
    public dialogRef: MatDialogRef<TableCarsChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: objectCars,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
