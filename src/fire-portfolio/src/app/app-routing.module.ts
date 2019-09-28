import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GameComponent } from './components/pages/game/game.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage'} },
  { path: 'home', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage'} },
  { path: 'project', component: ProjectsComponent, data: { animation: 'ProjectsPage'} },
  { path: 'game', component: GameComponent, data: {animation: 'FilterPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
