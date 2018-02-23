import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeJumbotronComponent } from './resume-jumbotron/resume-jumbotron.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [ResumeComponent, ResumeJumbotronComponent]
})
export class ResumeModule { }
