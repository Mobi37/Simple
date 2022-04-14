import { Component, OnInit, Type, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public width: number = 100;
  public selectedUser: {name: string} = { name:"def" };
  public id: number = 1;
  public classYellow: string = "yellow";
  public isShow: boolean = true;
  public user: {
    name: string;
  } = {
    name: "Jarry",
  }

  public users: Array<{name: string}> = [
    {name: "jarry"},
    {name: "jerry"},
    {name: "Tom"},
    {name: "Tym"},
    {name: "Tam"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public print(): number {
    return Math.random();
  }

  public changeColor(): void{
    this.classYellow == "yellow" ? this.classYellow = "red" : this.classYellow = "yellow";
  }

  public changesColor(event: string): void{
    this.classYellow = event;
    
  }

}