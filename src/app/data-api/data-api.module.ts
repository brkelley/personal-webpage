import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataApiService } from './resume-data-api/resume-data-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ResumeDataApiService],
  declarations: []
})
export class DataApiModule { }
