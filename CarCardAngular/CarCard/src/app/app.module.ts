import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCarsComponent } from './table-cars/table-cars.component';
import { TableCarsService } from './table-cars/table-cars.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableCarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    MatButtonModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
  ],
  providers: [ TableCarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
