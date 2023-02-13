import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UnknownPathComponent } from './pages/unknown-path/unknown-path.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RobotDataPageComponent } from './pages/robot-data-page/robot-data-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PlanetDataTableComponent } from './components/planet-data-table/planet-data-table.component';
import { RobotDataTableComponent } from './components/robot-data-table/robot-data-table.component';
import { PlanetDataPageComponent } from './pages/planet-data-page/planet-data-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'planet', component: PlanetDataPageComponent },
  { path: 'robot', component: RobotDataPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: UnknownPathComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UnknownPathComponent,
    LandingPageComponent,
    RobotDataPageComponent,
    MainHeaderComponent,
    PlanetDataTableComponent,
    RobotDataTableComponent,
    PlanetDataPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }