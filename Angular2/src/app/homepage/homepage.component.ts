import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  navItems: Object[] = ['About Me', 'Resume', 'Projects'];
  socialMediaItems: Object[];

  constructor() {
    this.navItems = [
      {
        displayName: 'About Me',
        route: 'about-me'
      },
      {
        displayName: 'Resume',
        route: 'resume'
      },
      {
        displayName: 'Projects',
        route: 'projects'
      }
    ];
    this.socialMediaItems = [
      {
        icon: 'fa fa-facebook-official',
        link: 'https://www.facebook.com/brendan.bebo.kelley'
      },
      {
        icon: 'fa fa-twitter',
        link: 'https://twitter.com/Bobi_Wan_Kenobi'
      },
      {
        icon: 'fa fa-github-square',
        link: 'https://github.com/brkelley'
      }
    ];
  }
}
