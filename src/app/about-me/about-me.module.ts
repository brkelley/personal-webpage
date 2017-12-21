import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeService } from './about-me.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutMeComponent
  ],
  providers: [
    AboutMeService
  ]
})
export class AboutMeModule { }
