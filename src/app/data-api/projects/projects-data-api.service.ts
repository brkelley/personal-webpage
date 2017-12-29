import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsDataApiService {

  constructor(private http: HttpClient) { }

  getProjectInfo(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:4200/assets/server-data/projects.json');
  }
}
