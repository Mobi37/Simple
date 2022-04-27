import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, IServerSideDatasource, IServerSideGetRowsParams, SelectionChangedEvent, ValueFormatterParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
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

  constructor(
    private _carService: TableCarsService, 
  ) { }

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

  crashCarFormatter(params: ValueFormatterParams){
    if( params.value == true ){
      return "Да"
    }
    return "Нет"
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
    this.agGridCars.api.applyTransaction(tx);
    this._carService.removeCar( selectedData[0] )
    this._carService.consoleAll()
    
  }
}
