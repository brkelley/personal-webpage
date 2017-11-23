import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about-me', component: AboutmeComponent },
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
        ResumeComponent,
        ProjectsComponent,
        AboutmeComponent
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
