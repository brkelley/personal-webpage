import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from './services/resume/resume.service';
import { PhoneNumberPipe } from './pipes/phone-number/phone-number.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneNumberPipe,
    CapitalizePipe
  ],
  exports: [
    PhoneNumberPipe,
    CapitalizePipe
  ],
  providers: [
    ResumeService
  ]
})
export class CoreModule { }
