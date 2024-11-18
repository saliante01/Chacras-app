import { TestBed } from '@angular/core/testing';

import { ChacrasService } from './chacras.service';

describe('ChacrasService', () => {
  let service: ChacrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChacrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
