import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from './services/resume/resume.service';
import { PhoneNumberPipe } from './pipes/phone-number/phone-number.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneNumberPipe
  ],
  exports: [
    PhoneNumberPipe
  ],
  providers: [
    ResumeService
  ]
})
export class CoreModule { }
