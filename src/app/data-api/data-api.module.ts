import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataApiService } from './resume/resume-data-api.service';
import { AboutMeDataApiService } from './about-me/about-me-data-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ResumeDataApiService,
    AboutMeDataApiService
  ],
  declarations: []
})
export class DataApiModule { }
