import { Component } from '@angular/core';
import { from, fromEvent, Observable, Observer, of, range, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appV8';

  // private obs = new Observable((observer: Observer<string>) => {
  //   observer.next("hello");
  //   observer.next("hello");
  //   observer.next("hello");

  //   setInterval( () =>{
  //     observer.next("hello");
  //   },1000 )

  //   setTimeout(() => {
  //     observer.complete()
  //   }, 10000);

  // } )

  // private obs = of("1","2","3");
  // private obs = from(["1","2"])
  // private obs = fromEvent( document.body, "mousemove" )
  // private obs = timer(0,100);
  private obs = range(0, 100)


  someMethod(){
    this.obs.subscribe({
      next: (value: any) => console.log(`Next ${value}`),
      complete: () => console.log("Final")
    })
  }

}
let temp = new AppComponent();
temp.someMethod();