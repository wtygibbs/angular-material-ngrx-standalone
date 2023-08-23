import { TestBed } from '@angular/core/testing';

import { InsuredFormService } from './insured-form.service';

describe('InsuredFormService', () => {
  let service: InsuredFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuredFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
