import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
     private route: ActivatedRoute,
     private router: Router 
     ) { 
    this.route.queryParams.subscribe( (param) => console.log(param) );
    this.route.data.subscribe( (data) => console.log(data) );

    this.route.data.subscribe( (data) => console.log(data['user']) )


    this.router.events.subscribe( (event: Event) => {

      if( event instanceof NavigationStart ){
        // console.log(event)
      }
      
    } )
  }

  ngOnInit(): void {
  }

}
