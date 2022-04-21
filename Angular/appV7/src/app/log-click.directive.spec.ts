import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LogClickDirective } from './log-click.directive';

@Component({
  template: `<div appLogClick (changes)="output = +$event"></div>`
})
export class TestConteinerComponent {
  public output: number = 0
}

describe('LogClickDirective', () => {
  let container: any;
  let fixture: any;

  beforeEach( () =>{
    TestBed.configureTestingModule({
      declarations: [TestConteinerComponent, LogClickDirective]
    });

    fixture = TestBed.createComponent(TestConteinerComponent);
    container = fixture.componentInstance;
  } )

  it('should create an instance', () => {
    const directive = new LogClickDirective();
    expect(directive).toBeTruthy();
  });

  it('should log click', () => {
    
    const div = fixture.nativeElement.querySelector("div");
    div.click(); 

    expect(container.output).toBe(1);
  });

});
