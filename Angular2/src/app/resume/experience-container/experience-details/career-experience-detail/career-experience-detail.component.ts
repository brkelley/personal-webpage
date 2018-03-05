import { Component, Input, OnInit } from '@angular/core';

import { ProfessionalExperience } from '../../../../models/resume/professional-experience.model';

@Component({
  selector: 'career-experience-detail',
  templateUrl: './career-experience-detail.component.html',
  styleUrls: ['./career-experience-detail.component.scss']
})
export class CareerExperienceDetailComponent implements OnInit {

  @Input() experience: ProfessionalExperience;

  constructor() { }

  ngOnInit() {
    if (!this.experience.image.includes('assets/company-logos/')) {
      this.experience.image = 'assets/company-logos/' + this.experience.image;
    }
  }
}
