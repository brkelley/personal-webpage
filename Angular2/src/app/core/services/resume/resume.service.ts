import { Injectable } from '@angular/core';

import { ResumeDataApiService } from '../../../data-api/resume/resume-data-api.service';
import { Resume } from '../../../models/resume/resume.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResumeService {

  constructor(private resumeDataApi: ResumeDataApiService) { }

  getResume(): Observable<Resume> {
    return this.resumeDataApi.getResume();
  }
}
