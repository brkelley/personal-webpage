import { Component, Input, OnInit } from '@angular/core';

import { Education } from '../../../../models/resume/education.model';

@Component({
  selector: 'education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.scss']
})
export class EducationExperienceComponent implements OnInit {

  @Input() experience: Education;

  constructor() { }

  ngOnInit() {
    if (!this.experience.image.includes('assets/company-logos/')) {
      this.experience.image = 'assets/company-logos/' + this.experience.image;
    }
  }

}
