import { TestBed } from '@angular/core/testing';

import { NewAppService } from './new-app.service';

describe('NewAppService', () => {
  let service: NewAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
