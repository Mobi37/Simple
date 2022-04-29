import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCarsChangeComponent } from './table-cars-change.component';

describe('TableCarsChangeComponent', () => {
  let component: TableCarsChangeComponent;
  let fixture: ComponentFixture<TableCarsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCarsChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCarsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
