import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AboutPageComponent} from './Pages/about-page/about-page.component';
import {ResumePageComponent} from './Pages/resume-page/resume-page.component';
import {ProjectsPageComponent} from './Pages/projects-page/projects-page.component';
import {ServicesPageComponent} from './Pages/services-page/services-page.component';
import {ContactPageComponent} from './Pages/contact-page/contact-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'resume', component: ResumePageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'contact', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
