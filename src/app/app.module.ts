import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BiographyComponent } from './biography/biography.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'biography', component: BiographyComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderNavComponent,
        HomepageComponent,
        BiographyComponent,
        ResumeComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
