import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GameComponent } from './components/pages/game/game.component';
import { BoticComponent } from './components/pages/botic/botic.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ErpComponent } from './components/pages/erp/erp.component';
import { MovieComponent } from './components/pages/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage'} },
  { path: 'home', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage'} },
  { path: 'project', component: ProjectsComponent, data: { animation: 'ProjectsPage'} },
  { path: 'game', component: GameComponent, data: {animation: 'FilterPage'} },
  { path: 'botic', component: BoticComponent, data: {animation: 'FilterPage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'FilterPage'} },
  { path: 'erp', component: ErpComponent, data: {animation: 'FilterPage'} },
  { path: 'movie', component: MovieComponent, data: {animation: 'FilterPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
