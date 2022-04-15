import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

// type arrayObjectUser = Array< { name: string } > 
export class UserService {

  private users: Array< { name: string } > = [
    { name: "Jerry" },
    { name: "tom" }
  ]

  constructor( 
    private _http : HttpClient,
    ) { }

  public getAllUser():  Array< { name: string } >{

      // return this._http.get("http://jsonplaceholder.typicode.com/users");
    return this.users;
    
  }

  public removeUser( name: string ): Array< { name: string } > {
    return this.users = this.users.filter( user => user.name !== name );
  }

  public addUser( name: string ): void {
    this.users.push({ name });
  }

}
