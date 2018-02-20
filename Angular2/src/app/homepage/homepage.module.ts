import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomepageComponent } from './homepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomepageComponent, HomepageNavbarComponent]
})
export class HomepageModule { }
