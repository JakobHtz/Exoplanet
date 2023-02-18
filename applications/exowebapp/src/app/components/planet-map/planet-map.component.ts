import { Component } from '@angular/core';
import { PlanetDataDto, PlanetDataService } from '../planet-data.service';

@Component({
  selector: 'app-planet-map',
  templateUrl: './planet-map.component.html',
  styleUrls: ['./planet-map.component.sass']
})
export class PlanetMapComponent {
  planetData: PlanetDataDto[] = [];
  planetMap = new PlanetMap(5, 5);

  constructor(private planetDataService: PlanetDataService) {
    this.planetDataService.getRobots().subscribe((data) => {
      this.planetData = data;
      for (let d of data) {
        console.log(d.x_pos + " " + d.y_pos + " " + d.ground);
        if (typeof d.x_pos != 'undefined' && typeof d.y_pos != 'undefined' && typeof d.ground != 'undefined') {
          this.planetMap.addCoord(d.x_pos,d.y_pos,d.ground);
        }
      }
    });
  }
}

class PlanetMap {
  map: String[];
  width: number;
  height: number;

  constructor (width: number, height: number) {
    this.width = width;
    this.height = height;
    this.map = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        this.map[j + i * width] = "UNKNOWN";
      }
    }
  }

  addCoord(x_pos: number, y_pos: number, value: String) {
    this.map[x_pos + y_pos * this.width] = value;
  }
}
