import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  displayName: string;
  tabs: Array<string>;
  activeTab: string;

  constructor(private router: Router) {
    this.displayName = 'Brendan Kelley';
    this.tabs = ['About Me', 'Resume', 'Projects'];
  }

  goTo(tabToGoTo: string) {
    this.activeTab = tabToGoTo;
    tabToGoTo = tabToGoTo.toLowerCase().replace(' ', '-');
    this.router.navigate(['/' + tabToGoTo]);
  }

  ngOnInit() {
    setTimeout(() => {
      this.activeTab = this.tabs.find(el => el.toLowerCase().replace(' ', '-') === this.router.url.substring(1));
    });
  }
}
