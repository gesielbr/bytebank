import { TestBed } from '@angular/core/testing';

import { CaralhoService } from './caralho.service';

describe('CaralhoService', () => {
  let service: CaralhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaralhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
