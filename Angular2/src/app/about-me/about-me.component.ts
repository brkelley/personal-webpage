import { Component, OnInit } from '@angular/core';
import { AboutMeService } from './about-me.service';
import { Autobiography } from '../models/about-me/autobiography.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  autobiography: Autobiography;

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit() {
    this.aboutMeService.getAutobiography()
      .subscribe((data: Autobiography) => {
        this.autobiography = data;
        this.remapPhotos();
      });
  }

  remapPhotos() {
    for (let i = 0; i < this.autobiography.photos.length; i++) {
      this.autobiography.photos[i] = 'assets/about-me-photos/' + this.autobiography.photos[i];
    }
  }
}
