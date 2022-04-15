import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appV4';

  constructor( _http: HttpClient ){

    _http.get("https://api.github.com/user").subscribe( results => {
      console.log(results);
    } )

  }


}
