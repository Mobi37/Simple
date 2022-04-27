import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { TableCarsService } from './table-cars.service';


@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  styleUrls: ['./table-cars.component.scss']
})
export class TableCarsComponent implements OnInit {
  
  @ViewChild('agGridCars') agGridCars!: AgGridAngular;
  @Output() carSelected: EventEmitter<[]> = new EventEmitter();

  private selectedRows: any;
  private gridApi!: GridApi;

  constructor(
    private _carService: TableCarsService, 
  ) { }

  columnDefs: ColDef[] = [
    { headerName: "Производитель", field: 'name', checkboxSelection: true },
    { headerName: "Год выпуска", field: 'yearsIssue' },
    { headerName: "Участвовала в ДТП", field: 'carAccident' },
    { headerName: "Цена", field: 'price'},
  ];

  rowData: any;

  ngOnInit(): void {
    
    // this.rowData = this._carService.getAllCars();

  }

  onSelectionChanged(event: SelectionChangedEvent) {
    console.log(event)
    this.selectedRows = this.agGridCars.api.getSelectedNodes();
    this.carSelected.emit(this.selectedRows as [])
  }

  onRemoveSelected() {
    const selectedData = this.agGridCars.api.getSelectedRows();
    const tx = {
      remove: selectedData,
    };
    this.agGridCars.api.applyServerSideTransaction(tx);
    // this._carService.removeCar(this.selectedRows[0].id) 
    // this.agGridCars.api.applyTransaction( { update: this.rowData } )
    // const res = this.agGridCars.api.applyTransaction({ remove: selectedData })!;
    this._carService.consoleAll();
    
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

      // this._carService.getAllCars()
      // params.api!.setServerSideDatasource(this._carService.getAllCars());
  }
}
