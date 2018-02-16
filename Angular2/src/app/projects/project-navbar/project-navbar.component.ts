import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.scss']
})
export class ProjectNavbarComponent implements OnInit {

  @Input() projects: string[];
  @Output() chosenProject: EventEmitter<string> = new EventEmitter();

  activeTabIdx = 0;

  constructor() { }

  ngOnInit() {
    this.goTo(0);
  }

  goTo(chosenTab: number) {
    this.activeTabIdx = chosenTab;
    this.chosenProject.emit(this.projects[this.activeTabIdx]);
  }
}
