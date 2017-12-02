import { Injectable } from '@angular/core';
import { Resume } from '../models/resume/resume.model';
import { ResumeDataApiService } from '../data-api/resume-data-api/resume-data-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResumeService {

  constructor(private resumeDataApi: ResumeDataApiService) { }

  getResume(): Observable<Resume> {
    return this.resumeDataApi.getResume();
  }
}
