import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss']
})
export class PhotoCarouselComponent implements OnInit {

  @Input() photos: string[];

  get currentPhoto(): string {
    return this.photos[this.currentPhotoIdx];
  }

  currentPhotoIdx = 0;
  photoRotateTimer: any;

  constructor() { }

  ngOnInit() {
    this.photoRotateTimer = setInterval(() => {
      this.progressCarousel(true, false);
    }, 4000);
  }

  progressCarousel(isForward: boolean, manualClick: boolean) {
    if (isForward) {
      this.currentPhotoIdx++;
      if (this.currentPhotoIdx >= this.photos.length) {
        this.currentPhotoIdx = 0;
      }
    } else {
      this.currentPhotoIdx--;
      if (this.currentPhotoIdx < 0) {
        this.currentPhotoIdx = this.photos.length - 1;
      }
    }
    if (manualClick) {
      clearInterval(this.photoRotateTimer);
      this.photoRotateTimer = setInterval(() => {
        this.progressCarousel(true, false);
      }, 4000);
    }
  }
}
