import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeService } from './about-me.service';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutMeComponent,
    PhotoCarouselComponent
  ],
  providers: [
    AboutMeService
  ]
})
export class AboutMeModule { }
