import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returm sum', () => {
    expect(service.sum(1, 1)).toBe(2);
  });

  it('should returm sum Async', fakeAsync( () => {

    service.sumAsync(1, 1).then( result => {
      expect(result).toBe(2);
    } )
    tick(3000);
    // flush();

  }));
});
