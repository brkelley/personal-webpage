import { Injectable } from '@angular/core';
import { Autobiography } from '../models/about-me/autobiography.model';
import { Observable } from 'rxjs/Observable';
import { AboutMeDataApiService } from '../data-api/about-me/about-me-data-api.service';

@Injectable()
export class AboutMeService {

  constructor(private aboutMeDataApi: AboutMeDataApiService) { }

  getAutobiography(): Observable<Autobiography> {
    return this.aboutMeDataApi.getAutobiography();
  }
}
