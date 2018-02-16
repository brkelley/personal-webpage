import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsComponent } from './projects/projects.component';
import { ConcertSpotifyerModule } from './concert-spotifyer/concert-spotifyer.module';
import { ResumeModule } from './resume/resume.module';
import { DataApiModule } from './data-api/data-api.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutMeModule } from './about-me/about-me.module';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
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
    HomepageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    HttpClientModule,
    FormsModule,
    ProjectsModule,
    ResumeModule,
    AboutMeModule,
    ConcertSpotifyerModule,
    DataApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
