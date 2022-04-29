import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import {MaterialExampleModule} from '../material.module';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCarsComponent} from './table-cars/table-cars.component';
import { TableCarsService } from './table-cars/table-cars.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableCarsRemoveComponent } from './table-cars/table-cars-remove/table-cars-remove.component';
import { TableCarsAddComponent } from './table-cars/table-cars-add/table-cars-add.component';
import { TableCarsChangeComponent } from './table-cars/table-cars-change/table-cars-change.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCarsComponent,
    TableCarsRemoveComponent,
    TableCarsAddComponent,
    TableCarsChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    MatButtonModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ TableCarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
