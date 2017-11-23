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
      active: string;
      private router: Router;

    constructor(private route: Router) {
        this.displayName = 'Brendan Kelley';
        this.tabs = ['About Me', 'Resume', 'Projects'];
        this.router = route;
    }

    goTo(tabToGoTo:String) {
        tabToGoTo = tabToGoTo.toLowerCase();
        tabToGoTo = tabToGoTo.replace(' ', '-');
        this.router.navigate(['/' + tabToGoTo]);
    }

    ngOnInit() {

    }


}
