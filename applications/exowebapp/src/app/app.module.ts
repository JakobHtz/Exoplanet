import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UnknownPathComponent } from './pages/unknown-path/unknown-path.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PlanetDataTableComponent } from './components/planet-data-table/planet-data-table.component';
import { RobotDataTableComponent } from './components/robot-data-table/robot-data-table.component';
import { TableDataPageComponent } from './pages/table-data-page/table-data-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { PlanetMapComponent } from './components/planet-map/planet-map.component';
import { PlanetDropDownComponent } from './components/planet-drop-down/planet-drop-down.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'tables', component: TableDataPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: UnknownPathComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UnknownPathComponent,
    LandingPageComponent,
    MainHeaderComponent,
    PlanetDataTableComponent,
    RobotDataTableComponent,
    TableDataPageComponent,
    MapPageComponent,
    PlanetMapComponent,
    PlanetDropDownComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
