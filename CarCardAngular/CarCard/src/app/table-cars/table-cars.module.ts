import { NgModule } from '@angular/core';
import { TableCarsComponent } from './table-cars.component';
import { TableCarsRemoveComponent } from './table-cars-remove/table-cars-remove.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableCarsService } from './table-cars.service';
import { TableCarsAddChangeComponent } from './table-cars-add-change/table-cars-add-change.component';


@NgModule({
  declarations: [
    TableCarsComponent,
    TableCarsRemoveComponent,
    TableCarsAddChangeComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    MatNativeDateModule,
    MaterialExampleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [ TableCarsService ],
  exports: [ TableCarsComponent ]
})
export class TableCarsModule { }
