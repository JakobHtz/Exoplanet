import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UnknownPathComponent } from './pages/unknown-path/unknown-path.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RobotDataPageComponent } from './pages/robot-data-page/robot-data-page.component';
import { RobotPositionPageComponent } from './pages/robot-position-page/robot-position-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RobotDataTableComponent } from './components/robot-data-table/robot-data-table.component';
import { RobotPositionTableComponent } from './components/robot-position-table/robot-position-table.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'pos', component: RobotPositionPageComponent },
  { path: 'data', component: RobotDataPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: UnknownPathComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UnknownPathComponent,
    LandingPageComponent,
    RobotDataPageComponent,
    RobotPositionPageComponent,
    MainHeaderComponent,
    RobotDataTableComponent,
    RobotPositionTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
