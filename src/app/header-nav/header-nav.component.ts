import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-header-nav',
      templateUrl: './header-nav.component.html',
      styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

      displayName: string;
      tabs: Array<string>;
      active: string;

    constructor() {
        this.displayName = 'Brendan Kelley';
        this.tabs = ['About Me', 'Resume', 'Projects'];
    }

    ngOnInit() {

    }


}
