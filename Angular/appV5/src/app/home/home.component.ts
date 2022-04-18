import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  goToUser(userId: number): void{
    this._router.navigate(["users", userId], { skipLocationChange: true, relativeTo: this._route })
    .then( () =>{
      console.log("12312")
    } );
    // this._router.navigateByUrl("users/" + userId, { skipLocationChange: true })
  }

}
