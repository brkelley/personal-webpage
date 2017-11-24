import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent, ProjectNavbarComponent]
})
export class ProjectsModule {
}
