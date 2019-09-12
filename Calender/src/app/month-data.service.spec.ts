import { TestBed } from '@angular/core/testing';

import { MonthDataService } from './month-data.service';

describe('MonthDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthDataService = TestBed.get(MonthDataService);
    expect(service).toBeTruthy();
  });
});
