import { Component } from '@angular/core';
import { PlanetDataDto, PlanetDataService } from '../planet-data.service';
import { RobotDataService, RobotDto } from '../robot-data.service';

@Component({
  selector: 'app-planet-map',
  templateUrl: './planet-map.component.html',
  styleUrls: ['./planet-map.component.sass']
})
export class PlanetMapComponent {
  planetData: PlanetDataDto[] = [];
  planetMap = new PlanetMap(5, 5);
  robotData: RobotDto[] = [];

  constructor(private planetDataService: PlanetDataService,private robotDataService: RobotDataService) {
    this.planetDataService.getRobots().subscribe((planetData) => {
      this.planetData = planetData;
      this.robotDataService.getRobots().subscribe((robotData) => {
        this.robotData = robotData;

        for (let d of planetData) {
          this.planetMap.addCoord(d);
        }
        for (let d of robotData) {
          this.planetMap.addRobotCoord(d);
        }
      });
    });
  }
}

class PlanetMap {
  map: PlanetMapData[];
  width: number;
  height: number;

  constructor (width: number, height: number) {
    this.width = width;
    this.height = height;
    this.map = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let tmpData = new PlanetDataDto();
        tmpData.ground = "UNKNOWN";
        tmpData.x_pos = j;
        tmpData.y_pos = i;
        let tmpMapData = new PlanetMapData(tmpData);
        this.map[j + i * width] = tmpMapData;
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
      mapTile.robotId = robot.RID;
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
