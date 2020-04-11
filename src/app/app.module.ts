import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ResumePageComponent } from './Pages/resume-page/resume-page.component';
import { ProjectsPageComponent } from './Pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { FooterComponent } from './Layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
