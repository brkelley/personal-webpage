import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'experience-navbar',
  templateUrl: './experience-navbar.component.html',
  styleUrls: ['./experience-navbar.component.scss']
})
export class ExperienceNavbarComponent implements OnInit {

  @Input() experienceCategories: string[];
  @Output() chosenTab: EventEmitter<string> = new EventEmitter();

  activeTab: string;

  constructor() { }

  ngOnInit() {
    this.activeTab = 'full-time';
    this.chosenTab.emit('full-time');
  }

  selectExperience(category: string) {
    this.activeTab = category;
    this.chosenTab.emit(this.activeTab);
  }
}
