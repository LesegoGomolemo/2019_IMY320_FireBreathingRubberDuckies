import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AnimatedCardComponent } from './components/layout/animated-card/animated-card.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { GameComponent } from './components/pages/game/game.component';
import { BoticComponent } from './components/pages/botic/botic.component';
import { MovieComponent } from './components/pages/movie/movie.component';
import { ErpComponent } from './components/pages/erp/erp.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    AnimatedCardComponent,
    LandingComponent,
    GameComponent,
    BoticComponent,
    MovieComponent,
    ErpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
