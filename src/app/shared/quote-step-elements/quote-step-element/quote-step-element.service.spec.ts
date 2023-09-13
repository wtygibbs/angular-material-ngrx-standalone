import { TestBed } from '@angular/core/testing';

import { QuoteStepElementService } from './quote-step-element.service';

describe('QuoteStepElementService', () => {
  let service: QuoteStepElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteStepElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
