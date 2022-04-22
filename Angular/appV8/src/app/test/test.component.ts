import { Component, OnInit } from '@angular/core';
import {  catchError, delay, delayWhen, exhaustMap, finalize, fromEvent, interval, map, mergeMap, of, pluck, range, retry, retryWhen, switchMap, tap, throwError, timeout } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor() { }

  // private obs = of({
  //   name: "jerry",
  //   age: "55"
  // }).pipe( pluck("name") );

  // private obs = range(0, 100).pipe( map( (number) => number * 2 ) )
  private clicks = fromEvent( document, "click" );
  // private obs = this.clicks.pipe( mergeMap( () => interval(1000) ) );
  // private obs = this.clicks.pipe( switchMap( () => interval(1000) ) );
  // private obs = this.clicks.pipe( exhaustMap( () => interval(1000) ) );

  // private obs = interval(100).pipe(
  //   mergeMap( (value) =>{
  //     if( value > 3  ){
  //       return throwError(() => new Error("Error > 3"))
  //     }
  //     return of(value)
  //   } ),
    
  //   retry(3)
  //   ,
  //   catchError( (err) => {
  //     console.log(err.message);
  //     return of(false);
  //   } )
  // )

  private obs = range(0, 100).pipe( delay(5000), tap( () => {
    console.log( Math.random() )
  } ), timeout(3000), finalize( () => console.log("Final") ) )



  someMethod(){
    this.obs.subscribe({
      next: (value: any) => console.log(`Next ${ value }`),
      complete: () => console.log("Final"),
      error: (err) => console.log(`Error: ${err}`)
    })
  }


}
let temp = new TestComponent();
temp.someMethod();
