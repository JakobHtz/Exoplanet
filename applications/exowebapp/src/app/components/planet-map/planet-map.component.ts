import { Component, Input, OnInit } from '@angular/core';
import { PlanetDataDto, PlanetDataService } from '../planet-data.service';
import { PlanetDto } from '../planet.service';
import { RobotDataService, RobotDto } from '../robot-data.service';

@Component({
  selector: 'app-planet-map',
  templateUrl: './planet-map.component.html',
  styleUrls: ['./planet-map.component.sass']
})
export class PlanetMapComponent implements OnInit{
  planetData: PlanetDataDto[] = [];
  planetMap = new PlanetMap(5, 5);
  robotData: RobotDto[] = [];

  constructor(private planetDataService: PlanetDataService,private robotDataService: RobotDataService) {}

  ngOnInit(): void {
    let planet= new PlanetDto();
    planet.planet_name = "";
    this.updateMap(planet);
  }

  updateMap(planet: PlanetDto | undefined) {
    let newMap = new PlanetMap(planet?.x_size, planet?.y_size);
    this.planetDataService.getPlanetData(planet?.planet_name).subscribe((planetData) => {
      this.planetData = planetData;
      this.robotDataService.getRobots(planet?.planet_name).subscribe((robotData) => {
        this.robotData = robotData;

        for (let d of planetData) {
          newMap.addCoord(d);
        }
        for (let d of robotData) {
          newMap.addRobotCoord(d);
        }
        this.planetMap = newMap;
      });
    });
  }
}

class PlanetMap {
  map: PlanetMapData[];
  width: number;
  height: number;

  constructor (width: number | undefined, height: number | undefined) {
    this.width = width? width: 0;
    this.height = height? height: 0;
    this.map = [];
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let tmpData = new PlanetDataDto();
        tmpData.ground = "UNKNOWN";
        tmpData.x_pos = j;
        tmpData.y_pos = i;
        let tmpMapData = new PlanetMapData(tmpData);
        this.map[j + i * this.width] = tmpMapData;
      }
    }
  }

  addCoord(planetData: PlanetDataDto) {
    if (typeof planetData.x_pos != 'undefined' && typeof planetData.y_pos != 'undefined'
        && planetData.x_pos < this.width && planetData.y_pos < this.height) {
      let mapTile = this.map[planetData.x_pos + planetData.y_pos * this.width];
      mapTile.planetData = planetData;
    }
  }

  addRobotCoord(robot: RobotDto) {
    if (typeof robot.x_pos != 'undefined' && typeof robot.y_pos != 'undefined'
        && robot.x_pos < this.width && robot.y_pos < this.height) {
      var mapTile = this.map[robot.x_pos + robot.y_pos * this.width];
      mapTile.robotDir = robot.dir;
      mapTile.robotId = robot.thread_id;
    }
  }
}

class PlanetMapData {
  planetData: PlanetDataDto;
  robotDir: 'NORTH'|'SOUTH'|'WEST'|'EAST'| undefined;
  robotId: number | undefined;

  constructor (planetData: PlanetDataDto) {
    this.planetData = planetData;
  }
}
