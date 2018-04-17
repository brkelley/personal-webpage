import { Component, Input } from '@angular/core';

@Component({
  selector: 'homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.scss']
})
export class HomepageNavbarComponent {

  @Input() navItems: { displayName: string, route: string }[];
  @Input() socialMediaIcons: { icon: string, link: string }[];

  constructor() { }
}
