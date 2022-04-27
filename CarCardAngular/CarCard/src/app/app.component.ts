import { Component, Input, OnInit, Output } from '@angular/core';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CarCard';

  public selectedCar!: RowNode[];
  ngOnInit(): void {
    
    // setInterval( () => {
    //   if( this.selectedCar !== undefined ){
    //     console.log( this.selectedCar[0] )
    //   }
      
    // },1000 )

  }

}
