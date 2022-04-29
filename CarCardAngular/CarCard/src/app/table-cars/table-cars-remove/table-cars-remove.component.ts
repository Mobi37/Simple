import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { DialogDataCars } from 'src/data.types';

@Component({
  selector: 'app-table-cars-remove',
  templateUrl: './table-cars-remove.component.html',
  styleUrls: ['./table-cars-remove.component.scss']
})
export class TableCarsRemoveComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TableCarsRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCars,
  ) {}

  columnDefs: ColDef[] = [
    { headerName: "Производитель", field: 'name', width: 150},
    { headerName: "Год выпуска", field: 'yearsIssue', width: 130 },
    { headerName: "Участвовала в ДТП", field: 'carAccident', valueFormatter: this.crashCarFormatter, width: 180 },
    { headerName: "Цена", field: 'price', width: 100},
  ];
  public rowData: any;

  public onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    const arrrayData = [ this.data ]
    this.rowData = arrrayData;
  }

   private crashCarFormatter(params: ValueFormatterParams): string{
    if( params.value == true ){
      return "Да"
    }
    return "Нет"
  }

}
