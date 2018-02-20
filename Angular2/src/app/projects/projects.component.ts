import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  activeProject: Project;

  get projectList(): string[] {
    return this.projects.map(el => el.project);
  }

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjectInfo().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  onChosenProject(project: string) {
    this.activeProject = this.projects.find(el => el.project === project);
  }
}
