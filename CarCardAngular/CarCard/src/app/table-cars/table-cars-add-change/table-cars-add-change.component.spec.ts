import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCarsAddChangeComponent } from './table-cars-add-change.component';

describe('TableCarsAddChangeComponent', () => {
  let component: TableCarsAddChangeComponent;
  let fixture: ComponentFixture<TableCarsAddChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCarsAddChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCarsAddChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
