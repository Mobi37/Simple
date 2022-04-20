import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appV6';
  nameControl: FormControl = new FormControl;
  fullNameControl: FormGroup = new FormGroup({});
  userListControl: FormGroup = new FormGroup({});
  userList: any;


  constructor(
    private formBuilder: FormBuilder,
  ){

  }


  ngOnInit(): void {
    this.nameControl = new FormControl("Tom", [ Validators.required, myValid], [myAsyncValid2]);
    this.nameControl.valueChanges.subscribe( (value) => console.log(value) );
    this.nameControl.statusChanges.subscribe( (status) => {
      if( status == "INVALID" ){
        console.log( this.nameControl.errors );
        console.log(status); 
      } 
    } );

    this.fullNameControl = new FormGroup({

      firstName: new FormControl(),
      secondName: new FormControl(),
    });

    this.fullNameControl.valueChanges.subscribe( (value) => console.log( value ) )

    
    // this.userListControl = new FormGroup({

    //   users: new FormArray([
    //     new FormControl("Jerry"),
    //     new FormControl("Tom"),
    //     new FormControl("Dog"),
    //     new FormControl("Garry"),
    //   ]),
      
    // });


    this.userListControl = this.formBuilder.group({
      users: this.formBuilder.array([ "Tom", "Jerry", "Dog", "Garry" ])
    });


    this.userListControl.valueChanges.subscribe( (value) => console.log(value) );
    this.userList = (this.userListControl.controls["users"] as FormArray);
  }

  removeUserControl(index: number): void{
    this.userList.removeAt(index);
  }

  addUserControl(): void{
    this.userList.push( new FormControl("") );
  }

}

function myValid( formControl: FormControl ){
  if( formControl.value.length > 10 ){
    return { myValid: { message: "max dlina 10" } }
  }
  return null;
}

function myAsyncValid2(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

  
  if( control.value.length < 3 ){
    return of( { ["message"]: "min dlina 3" } )
  }
  return of(null);

}