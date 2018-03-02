import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience-navbar',
  templateUrl: './experience-navbar.component.html',
  styleUrls: ['./experience-navbar.component.scss']
})
export class ExperienceNavbarComponent implements OnInit {

  @Input() experienceCategories: string[];

  activeTab: string;

  constructor() {
    this.activeTab = 'full-time';
  }

  ngOnInit() {
  }

  selectExperience(category: string) {
    this.activeTab = category;
  }
}
