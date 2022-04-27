import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCarsComponent } from './table-cars/table-cars.component';
import { TableCarsService } from './table-cars/table-cars.service';

@NgModule({
  declarations: [
    AppComponent,
    TableCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    AgGridModule.withComponents([])
  ],
  providers: [ TableCarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
