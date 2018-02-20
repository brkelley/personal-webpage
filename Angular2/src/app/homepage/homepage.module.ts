import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageNavbarComponent} from './homepage-navbar/homepage-navbar.component';
import {HomepageComponent} from './homepage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomepageComponent, HomepageNavbarComponent]
})
export class HomepageModule { }
