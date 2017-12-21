import { TestBed, inject } from '@angular/core/testing';

import { AboutMeDataApiService } from './about-me-data-api.service';

describe('AboutMeDataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutMeDataApiService]
    });
  });

  it('should be created', inject([AboutMeDataApiService], (service: AboutMeDataApiService) => {
    expect(service).toBeTruthy();
  }));
});
