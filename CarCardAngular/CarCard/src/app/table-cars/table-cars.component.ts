import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { objectCars } from 'src/data.types';
import { TableCarsAddComponent } from './table-cars-add/table-cars-add.component';
import { TableCarsChangeComponent } from './table-cars-change/table-cars-change.component';
import { TableCarsRemoveComponent } from './table-cars-remove/table-cars-remove.component';
import { TableCarsService } from './table-cars.service';

@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  styleUrls: ['./table-cars.component.scss']
})
export class TableCarsComponent implements OnInit {
  
  @ViewChild('agGridCars') agGridCars!: AgGridAngular;

  private carsInfo!: objectCars;

  columnDefs: ColDef[] = [
    { headerName: "Производитель", field: 'name', checkboxSelection: true },
    { headerName: "Год выпуска", field: 'yearsIssue' },
    { headerName: "Участвовала в ДТП", field: 'carAccident', valueFormatter: this.crashCarFormatter },
    { headerName: "Цена", field: 'price'},
  ];

  public rowData: any;

  constructor(
    private _carService: TableCarsService, 
    public dialog: MatDialog,
  ) { }

  public openAddCar(): void {
    
    const openWindows = this.openDialog( TableCarsAddComponent, this.carsInfo );

    openWindows.afterClosed().subscribe((result: objectCars) => {
      if( result != undefined ){
        this._carService.addCar(result);
        const addCarData: Array<object> = [ result ];
        this.agGridCars.api.applyTransaction({ add: addCarData });
      }
    });
  }

  public openRemoveCar(): void {
    const deleteCars = this.agGridCars.api.getSelectedRows();
    const openWindows = this.openDialog( TableCarsRemoveComponent, deleteCars[0] )

    openWindows.afterClosed().subscribe( (result: boolean) => {
      if( result && deleteCars.length != 0 ){
        this.onRemoveSelected( deleteCars )
      }
    });
  }

  public openChangeCar(){
    const changeCars = this.agGridCars.api.getSelectedRows();
    const openWindows = this.openDialog( TableCarsChangeComponent, changeCars[0] )

    openWindows.afterClosed().subscribe( (result: objectCars) => {
      if( result != undefined ){
        this.onChangeSelected( changeCars[0], result );
      }

    });
  }

  private openDialog( component: any, carsdata: objectCars ): any {
    return this.dialog.open( component , {
      data: { 
        name: carsdata?.name,
        yearsIssue: carsdata?.yearsIssue,
        carAccident: carsdata?.carAccident,
        price: carsdata?.price
      },
    });
    
  }

  ngOnInit(): void {
    this.rowData = this._carService.getAllCars();
  }

  private crashCarFormatter(params: ValueFormatterParams): string{
    if( params.value == true ){
      return "Да"
    }
    return "Нет"
  }

  private onRemoveSelected( deleterows: Array<objectCars> ): void {
    this.agGridCars.api.applyTransaction({ remove: deleterows });
    this._carService.removeCar( deleterows[0] )
  }

  private onChangeSelected( currentRow: objectCars, newRow: objectCars ): void{

    this._carService.changeCar( currentRow, newRow );

    const itemsToUpdate: any[] = [];
    this.agGridCars.api.forEachNodeAfterFilterAndSort(function (rowNode, index) {
      if( rowNode.data == currentRow ){
        rowNode.data = newRow;
        itemsToUpdate.push( rowNode.data )
        return
      }
    });
    this.agGridCars.api.applyTransaction({ update:itemsToUpdate })
  }

}
