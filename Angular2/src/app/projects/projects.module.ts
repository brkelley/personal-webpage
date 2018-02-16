import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent, ProjectNavbarComponent],
  providers: [ProjectsService]
})
export class ProjectsModule {
}
