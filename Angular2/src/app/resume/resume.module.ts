import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeJumbotronComponent } from './resume-jumbotron/resume-jumbotron.component';
import { CoreModule } from '../core/core.module';
import { ExperienceContainerComponent } from './experience-container/experience-container.component';
import { ExperienceNavbarComponent } from './experience-container/experience-navbar/experience-navbar.component';
import { ExperienceDetailsComponent } from './experience-container/experience-details/experience-details.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    ResumeComponent,
    ResumeJumbotronComponent,
    ExperienceContainerComponent,
    ExperienceNavbarComponent,
    ExperienceDetailsComponent
  ]
})
export class ResumeModule { }
