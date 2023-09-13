import { TestBed } from '@angular/core/testing';

import { InsuredDetailsService } from './insured-details.service';

describe('InsuredDetailsService', () => {
  let service: InsuredDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuredDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
