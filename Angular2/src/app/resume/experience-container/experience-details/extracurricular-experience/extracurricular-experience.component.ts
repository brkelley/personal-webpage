import { Component, Input, OnInit } from '@angular/core';

import { ExtraCurricularExperience } from '../../../../models/resume/extra-curricular-experience.model';

@Component({
  selector: 'extracurricular-experience',
  templateUrl: './extracurricular-experience.component.html',
  styleUrls: ['./extracurricular-experience.component.scss']
})
export class ExtracurricularExperienceComponent implements OnInit {

  @Input() experience: ExtraCurricularExperience;

  constructor() { }

  ngOnInit() {
    if (!this.experience.image.includes('assets/company-logos/')) {
      this.experience.image = 'assets/company-logos/' + this.experience.image;
    }
  }

}
