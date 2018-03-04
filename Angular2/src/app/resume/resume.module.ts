import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { ResumeJumbotronComponent } from './resume-jumbotron/resume-jumbotron.component';
import { CoreModule } from '../core/core.module';
import { ExperienceContainerComponent } from './experience-container/experience-container.component';
import { ExperienceNavbarComponent } from './experience-container/experience-navbar/experience-navbar.component';
import {
  CareerExperienceDetailComponent
} from './experience-container/experience-details/career-experience-detail/career-experience-detail.component';
import {
  EducationExperienceComponent
} from './experience-container/experience-details/education-experience/education-experience.component';
import {
  ExtracurricularExperienceComponent
} from './experience-container/experience-details/extracurricular-experience/extracurricular-experience.component';

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
    CareerExperienceDetailComponent,
    EducationExperienceComponent,
    ExtracurricularExperienceComponent
  ]
})
export class ResumeModule { }
