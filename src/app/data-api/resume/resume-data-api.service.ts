import { Injectable } from '@angular/core';
import { Resume } from '../../models/resume/resume.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResumeDataApiService {

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  getResume(): Observable<Resume> {
    if (!environment.useServer) {
      return this.http.get<Resume>('http://localhost:4200/assets/server-data/resume.json');
    } else {
      this.toastr.error('Server is down!', 'Error');
      throw new Error();
    }
  }
}
