import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalExperience } from '../../models/resume/professional-experience.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss'],
  animations: [
    trigger('experienceDetails', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class ProfessionalExperienceComponent implements OnInit {

  @Input() experienceData: ProfessionalExperience;

  openDetails: boolean;

  constructor() { }

  ngOnInit() {
    this.experienceData.image = 'assets/company-logos/' + this.experienceData.image;
  }

}
