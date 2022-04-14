import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: {name: string} = {name:""};
  @Output() userSelected: EventEmitter<object> = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {

  }

  public selectUser(): void{
    this.userSelected.emit();
  }

}
