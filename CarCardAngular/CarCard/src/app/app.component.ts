import { Component, Input, OnInit, Output } from '@angular/core';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CarCard';

  ngOnInit(): void {

  }

}
