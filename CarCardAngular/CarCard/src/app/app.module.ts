import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCarsModule } from './table-cars/table-cars.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    TableCarsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
