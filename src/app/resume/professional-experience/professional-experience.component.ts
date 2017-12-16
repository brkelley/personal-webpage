import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalExperience } from '../../models/resume/professional-experience.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  @Input() experienceData: ProfessionalExperience;

  openDetails: boolean;

  constructor() { }

  ngOnInit() {
    this.experienceData.image = 'assets/company-logos/' + this.experienceData.image;
  }

}
