import { Component, Input } from '@angular/core';
import { PlanetDto } from '../planet.service';
import { RobotDataService, RobotDto } from '../robot-data.service';

@Component({
  selector: 'app-robot-data-table',
  templateUrl: './robot-data-table.component.html',
  styleUrls: ['./robot-data-table.component.sass']
})
export class RobotDataTableComponent {
  robotData: RobotDto[] = [];
  displayedColumns: string[] = ['RID', 'planet', 'x_pos', 'y_pos', 'dir'];

  planet: PlanetDto | undefined;

  constructor(private robotDataService: RobotDataService) {
    let planet= new PlanetDto();
    planet.planet_name = "";
    this.setPlanet(planet);
  }

  setPlanet(planet: PlanetDto | undefined) {
    this.planet = planet;
    this.robotDataService.getRobots(this.planet?.planet_name).subscribe((data) => {
      console.log("Fetched Robots");
      this.robotData = data;
      console.log(data);
    });
  }
}
