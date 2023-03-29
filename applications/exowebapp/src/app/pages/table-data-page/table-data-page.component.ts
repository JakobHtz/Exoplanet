import { Component, ViewChild } from '@angular/core';
import { PlanetDataTableComponent } from 'src/app/components/planet-data-table/planet-data-table.component';
import { PlanetDto } from 'src/app/components/planet.service';
import { RobotDataTableComponent } from 'src/app/components/robot-data-table/robot-data-table.component';

@Component({
  selector: 'app-table-data-page',
  templateUrl: './table-data-page.component.html',
  styleUrls: ['./table-data-page.component.sass']
})
export class TableDataPageComponent {
  @ViewChild(RobotDataTableComponent)
  robotTable!: RobotDataTableComponent;

  @ViewChild(PlanetDataTableComponent)
  planetDataTable!: PlanetDataTableComponent;

  onSelect(planet: PlanetDto) {
    this.planetDataTable.setPlanet(planet);
    this.robotTable.setPlanet(planet);
    console.log("Selected " + planet);
  }
}
