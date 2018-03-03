import { Component, Input, OnInit } from '@angular/core';

import { Experience } from '../../../models/resume/experience.model';

@Component({
  selector: 'experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {

  @Input() experience: Experience;

  constructor() { }

  ngOnInit() {
  }

}
