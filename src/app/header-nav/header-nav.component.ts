import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  displayName: string;
  tabs: Array<string>;

  constructor() {
    this.displayName = 'Brendan Kelley';
    this.tabs = ['GitHub', 'About Me', 'Resume', 'Projects'];
  }

  ngOnInit() {

  }

}
