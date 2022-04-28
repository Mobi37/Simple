import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { TableCarsRemoveComponent } from './table-cars-remove/table-cars-remove.component';
import { TableCarsService } from './table-cars.service';

@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  styleUrls: ['./table-cars.component.scss']
})
export class TableCarsComponent implements OnInit {
  
  @ViewChild('agGridCars') agGridCars!: AgGridAngular;
  private carName!: string;
  private carYearsIssue!: number;
  private carCarAccident!: boolean;
  private carPrice!: number;

  constructor(
    private _carService: TableCarsService, 
    public dialog: MatDialog,
  ) { }

  openRemoveCar(): void {
    const dialogRef = this.dialog.open(TableCarsRemoveComponent, {
      width: '350px',
      data: { 
        name: this.carName,
        yearsIssue: this.carYearsIssue,
        carAccident: this.carCarAccident,
        price: this.carPrice
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if( result != undefined && result.name != undefined && result.yearsIssue != undefined && result.carAccident != undefined && result.price != undefined ){
        this._carService.addCar(result);
        const addCarData: Array<object> = [ result ];
        this.agGridCars.api.applyTransaction({ add: addCarData });
        this._carService.consoleAll();
      }
    });
  }


  columnDefs: ColDef[] = [
    { headerName: "Производитель", field: 'name', checkboxSelection: true },
    { headerName: "Год выпуска", field: 'yearsIssue' },
    { headerName: "Участвовала в ДТП", field: 'carAccident', valueFormatter: this.crashCarFormatter },
    { headerName: "Цена", field: 'price'},
  ];

  public rowData: any;

  ngOnInit(): void {
    this.rowData = this._carService.getAllCars();
  }


  crashCarFormatter(params: ValueFormatterParams): string{
    if( params.value == true ){
      return "Да"
    }
    return "Нет"
  }

  onRemoveSelected() {
    const selectedData = this.agGridCars.api.getSelectedRows();
    const tx = {
      remove: selectedData,
    };
    this.agGridCars.api.applyTransaction(tx);
    this._carService.removeCar( selectedData[0] )
    this._carService.consoleAll()
    
  }
}
