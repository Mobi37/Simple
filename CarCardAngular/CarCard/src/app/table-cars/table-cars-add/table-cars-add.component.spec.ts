import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCarsAddComponent } from './table-cars-add.component';

describe('TableCarsAddComponent', () => {
  let component: TableCarsAddComponent;
  let fixture: ComponentFixture<TableCarsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCarsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCarsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
