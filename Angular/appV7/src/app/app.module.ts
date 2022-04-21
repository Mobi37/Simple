import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { UserCardComponent } from './user-card/user-card.component';
import { LogClickDirective } from './log-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    UserCardComponent,
    LogClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
