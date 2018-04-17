import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicQuoteComponent } from './music-quote/music-quote.component';
import { NowPlayingWrapperComponent } from './now-playing-wrapper/now-playing-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicComponent, MusicQuoteComponent, NowPlayingWrapperComponent]
})
export class MusicModule { }
