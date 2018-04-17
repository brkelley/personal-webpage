import { Component, Input, OnInit } from '@angular/core';

import { Experience } from '../../models/resume/experience.model';

@Component({
  selector: 'experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent implements OnInit {

  @Input() experienceCategories: string[];
  @Input() experiences: Object;

  chosenExperience: Experience;
  chosenExperienceType: string;
  _switchType: string;

  get switchType(): string {
    return this._switchType;
  }

  set switchType(specificType: string) {
    if (specificType === 'full-time' || specificType === 'part-time' || specificType === 'internship') {
      this._switchType = 'career-experience';
    } else {
      this._switchType = specificType;
    }
  }

  constructor() { }

  ngOnInit() { }

  onTabChosen(tab: string) {
    this.chosenExperience = this.experiences[tab];
    this.chosenExperienceType = tab;
    this.switchType = tab;
  }
}
