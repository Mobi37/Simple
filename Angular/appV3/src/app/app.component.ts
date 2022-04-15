import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'appV3';

  public users: Array< {name:string} > =[]

  constructor(
    private _userService: UserService,
    private vievContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  ngOnInit(): void{
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
      const componentRef = this.vievContainerRef.createComponent(componentFactory);
    }, 2000);


    // this._userService.getAllUser().subscribe((user: any) => this.users = this.users);
    this.users = this._userService.getAllUser()
  }


  public removeUser(name: string): void {
    this._userService.removeUser(name);
    this.users = this._userService.getAllUser();
  }

  public addUser(name: string): void{
    if(!name) return
    this._userService.addUser(name);
    this.users = this._userService.getAllUser();
  }

}
