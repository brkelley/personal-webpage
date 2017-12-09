import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalExperience } from '../../models/resume/professional-experience.model';

@Component({
  selector: 'professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  @Input() experienceData: ProfessionalExperience;

  constructor() { }

  ngOnInit() {
    this.experienceData.image = 'assets/company-logos/' + this.experienceData.image;
  }

}
