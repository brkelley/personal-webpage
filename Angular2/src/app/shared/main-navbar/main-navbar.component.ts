import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  navItems: { displayName: string, route: string }[];
  currentRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.currentRoute = this.router.url;
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.currentRoute = evt.url;
        }
      });
    });

    this.navItems = [
      {
        displayName: 'About Me',
        route: '/about-me'
      },
      {
        displayName: 'Resume',
        route: '/resume'
      },
      {
        displayName: 'Projects',
        route: '/projects'
      }
    ];
  }

}
