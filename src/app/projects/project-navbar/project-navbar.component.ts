import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.scss']
})
export class ProjectNavbarComponent implements OnInit {

  projects: string[] = ['Personal Webpage'];
  activeTab: string = 'Personal Webpage';

  constructor() { }

  ngOnInit() {
  }

  goTo(chosenTab: string) {
    this.activeTab = chosenTab;
  }
}
