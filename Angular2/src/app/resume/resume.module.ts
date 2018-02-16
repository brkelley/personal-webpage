import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResumeComponent,
    ProfessionalExperienceComponent
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeModule { }
