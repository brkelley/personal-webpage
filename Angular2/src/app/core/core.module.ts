import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from './services/resume/resume.service';
import { PhoneNumberPipe } from './pipes/phone-number/phone-number.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { DateConverterPipe } from './pipes/date-converter/date-converter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneNumberPipe,
    CapitalizePipe,
    DateConverterPipe
  ],
  exports: [
    PhoneNumberPipe,
    CapitalizePipe,
    DateConverterPipe
  ],
  providers: [
    ResumeService
  ]
})
export class CoreModule { }
