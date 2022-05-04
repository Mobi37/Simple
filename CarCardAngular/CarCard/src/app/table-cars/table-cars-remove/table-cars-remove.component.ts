import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { objectCars } from 'src/data.types';

@Component({
  selector: 'app-table-cars-remove',
  templateUrl: './table-cars-remove.component.html',
  styleUrls: ['./table-cars-remove.component.scss']
})
export class TableCarsRemoveComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TableCarsRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: objectCars,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {

  }
}
