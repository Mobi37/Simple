import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { objectCars } from 'src/data.types';
import { TableCarsAddChangeComponent } from './table-cars-add-change/table-cars-add-change.component';
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
  public checkActionButton: boolean = true;

  public columnDefs: ColDef[] = [
    { headerName: "Производитель", field: 'name', checkboxSelection: true },
    { headerName: "Год выпуска", field: 'yearsIssue' },
    { headerName: "Участвовала в ДТП", field: 'carAccident', valueFormatter: this.crashCarFormatter },
    { headerName: "Цена", field: 'price'},
  ];

  public rowData!: Array<objectCars>;

  constructor(
    private _carService: TableCarsService, 
    public dialog: MatDialog,
  ) { }

  public openAddCar(): void {
    
    const openWindows = this.openDialog( TableCarsAddChangeComponent, this.carsInfo );

    openWindows.afterClosed().subscribe((result: objectCars) => {
      if( result != null ){
        this._carService.addCar(result);
        this.agGridCars.api.applyTransaction({ add: [ result ] });
      }
    });
  }

  public openRemoveCar(): void {
    const deleteCars = this.agGridCars.api.getSelectedRows();
    const openWindows = this.openDialog( TableCarsRemoveComponent, deleteCars[0] );

    openWindows.afterClosed().subscribe( (result: boolean) => {
      if( result && deleteCars.length != 0 ){
        this.onRemoveSelected( deleteCars );
      }
    });
  }

  public openChangeCar(){
    const changeCars = this.agGridCars.api.getSelectedRows();
    const openWindows = this.openDialog( TableCarsAddChangeComponent, changeCars[0] );
    openWindows.afterClosed().subscribe( (result: objectCars) => {
      if( result != null ){
        this.onChangeSelected( changeCars[0], result );
      }

    });
  }

  private openDialog( component: ComponentType<object>, carsData: objectCars ): MatDialogRef<object> {
    return this.dialog.open( component , {
      data: { 
        name: carsData?.name,
        yearsIssue: carsData?.yearsIssue,
        carAccident: carsData?.carAccident,
        price: carsData?.price
      },
    });
    
  }

  ngOnInit(): void {
    this.rowData = this._carService.getAllCars();
  }

  private crashCarFormatter(params: ValueFormatterParams): string{
    return params.value == true ? "Да" : "Нет";
  }

  private onRemoveSelected( deleteRows: Array<objectCars> ): void {
    this.agGridCars.api.applyTransaction({ remove: deleteRows });
    this._carService.removeCar( deleteRows[0] );
  }

  private onChangeSelected( currentRow: objectCars, newRow: objectCars ): void{

    this._carService.changeCar( currentRow, newRow );

    const itemsToUpdate: objectCars[] = [];
    this.agGridCars.api.forEachNodeAfterFilterAndSort((rowNode, index) => {
      if( rowNode.data == currentRow ){
        rowNode.data = newRow;
        itemsToUpdate.push( rowNode.data );
        return;
      }
    });
    this.agGridCars.api.applyTransaction({ update:itemsToUpdate });
  }

  public checkSelectedRows(): void{
    this.agGridCars.api.getSelectedRows().length == 1 ? this.checkActionButton = false : this.checkActionButton = true;
  }
}
