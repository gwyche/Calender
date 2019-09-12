import { TestBed } from '@angular/core/testing';

import { DayDataService } from './day-data.service';

describe('DayDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayDataService = TestBed.get(DayDataService);
    expect(service).toBeTruthy();
  });
});
