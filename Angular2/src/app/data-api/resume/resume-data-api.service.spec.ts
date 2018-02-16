import { TestBed, inject } from '@angular/core/testing';

import { ResumeDataApiService } from './resume-data-api.service';

describe('ResumeDataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeDataApiService]
    });
  });

  it('should ...', inject([ResumeDataApiService], (service: ResumeDataApiService) => {
    expect(service).toBeTruthy();
  }));
});
