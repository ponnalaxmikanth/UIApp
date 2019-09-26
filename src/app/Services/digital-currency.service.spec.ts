import { TestBed } from '@angular/core/testing';

import { DigitalCurrencyService } from './digital-currency.service';

describe('DigitalCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitalCurrencyService = TestBed.get(DigitalCurrencyService);
    expect(service).toBeTruthy();
  });
});
