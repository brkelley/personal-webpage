import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Autobiography } from '../../models/about-me/autobiography.model';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AboutMeDataApiService {

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  getAutobiography(): Observable<Autobiography> {
    if (!environment.useServer) {
      return this.http.get<Autobiography>('http://localhost:4200/assets/server-data/about-me.json');
    } else {
      this.toastr.error('Server is down!', 'Error');
      throw new Error();
    }
  }
}
