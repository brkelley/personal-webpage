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

  constructor() { }

  ngOnInit() { }

  onTabChosen(tab: string) {
    this.chosenExperience = this.experiences[tab];
  }
}
