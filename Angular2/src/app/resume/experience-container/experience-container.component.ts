import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent implements OnInit {

  @Input() experienceCategories: string[];
  @Input() experiences: Object;

  constructor() { }

  ngOnInit() { }

}
