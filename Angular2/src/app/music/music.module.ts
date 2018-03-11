import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicQuoteComponent } from './music-quote/music-quote.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicComponent, MusicQuoteComponent]
})
export class MusicModule { }
