import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.scss']
})
export class PhotoCarouselComponent implements OnInit {

  @Input() photos: string[];

  currentPhoto: string;
  currentPhotoIdx = 0;

  constructor() { }

  ngOnInit() {
    this.currentPhoto = this.photos[this.currentPhotoIdx];
  }

}
