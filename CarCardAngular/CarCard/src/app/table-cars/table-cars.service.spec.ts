import { TestBed } from '@angular/core/testing';

import { TableCarsService } from './table-cars.service';

describe('TableCarsService', () => {
  let service: TableCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
