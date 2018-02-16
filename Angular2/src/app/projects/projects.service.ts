import { Injectable } from '@angular/core';
import { ProjectsDataApiService } from '../data-api/projects/projects-data-api.service';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.model';

@Injectable()
export class ProjectsService {

  constructor(private projectsDataApi: ProjectsDataApiService) { }

  getProjectInfo(): Observable<Project[]> {
    return this.projectsDataApi.getProjectInfo();
  }
}
