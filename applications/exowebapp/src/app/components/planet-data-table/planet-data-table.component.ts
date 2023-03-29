import { Component, Input } from '@angular/core';
import { PlanetDataDto, PlanetDataService } from '../planet-data.service';
import { PlanetDto } from '../planet.service';

@Component({
  selector: 'app-planet-data-table',
  templateUrl: './planet-data-table.component.html',
  styleUrls: ['./planet-data-table.component.sass']
})
export class PlanetDataTableComponent {
  planetData: PlanetDataDto[] = [];
  displayedColumns: string[] = ['DID', 'RID', 'planet', 'timestamp', 'temp', 'ground', 'x_pos', 'y_pos'];

  planet: PlanetDto | undefined;

  constructor(private planetDataService: PlanetDataService) {
    let planet= new PlanetDto();
    planet.planet_name = "";
    this.setPlanet(planet);
  }

  setPlanet(planet: PlanetDto | undefined) {
    this.planet = planet;
    this.planetDataService.getPlanetData(this.planet?.planet_name).subscribe((data) => {
      console.log("Fetched Planet Data");
      this.planetData = data;
      console.log(data);
    });
  }
}
