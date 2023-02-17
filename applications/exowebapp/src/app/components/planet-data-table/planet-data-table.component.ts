import { Component } from '@angular/core';
import { PlanetDataDto, PlanetDataService } from '../planet-data.service';

@Component({
  selector: 'app-planet-data-table',
  templateUrl: './planet-data-table.component.html',
  styleUrls: ['./planet-data-table.component.sass']
})
export class PlanetDataTableComponent {
  planetData: PlanetDataDto[] = [];
  displayedColumns: string[] = ['DID', 'RID', 'planet', 'timestamp', 'temp', 'ground', 'x_pos', 'y_pos'];

  constructor(private planetDataService: PlanetDataService) {
    this.planetDataService.getRobots().subscribe((data) => {
      this.planetData = data;
    });
  }
}
