import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeService } from './resume.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResumeComponent
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeModule { }
