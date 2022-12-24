import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EducationComponent } from './components/pages/education/education.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
