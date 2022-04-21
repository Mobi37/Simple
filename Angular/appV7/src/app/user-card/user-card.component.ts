import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  public user: {name: string} = { name: ""};

  constructor(
    private _userService: UserService,
  ) { }

  someMethod(){
    this._userService.getOne(1).subscribe( (user) => this.user = user );
  }

}
