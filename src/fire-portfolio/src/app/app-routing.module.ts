import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage'} },
  { path: 'project', component: ProjectsComponent, data: { animation: 'ProjectsPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
