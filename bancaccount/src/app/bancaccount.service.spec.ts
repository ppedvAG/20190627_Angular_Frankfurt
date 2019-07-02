import { TestBed } from '@angular/core/testing';

import { BancaccountService } from './bancaccount.service';

describe('BancaccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BancaccountService = TestBed.get(BancaccountService);
    expect(service).toBeTruthy();
  });
});
