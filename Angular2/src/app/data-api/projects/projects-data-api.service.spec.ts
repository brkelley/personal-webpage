import { TestBed, inject } from '@angular/core/testing';

import { ProjectsDataApiService } from './projects-data-api.service';

describe('ProjectsDataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsDataApiService]
    });
  });

  it('should be created', inject([ProjectsDataApiService], (service: ProjectsDataApiService) => {
    expect(service).toBeTruthy();
  }));
});
