import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCarsRemoveComponent } from './table-cars-remove.component';

describe('TableCarsRemoveComponent', () => {
  let component: TableCarsRemoveComponent;
  let fixture: ComponentFixture<TableCarsRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCarsRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCarsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
