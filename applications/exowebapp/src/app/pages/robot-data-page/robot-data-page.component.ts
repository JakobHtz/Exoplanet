import { Component } from '@angular/core';
import { RobotDataService } from 'src/app/components/robot-data.service';

@Component({
  selector: 'app-robot-data-page',
  templateUrl: './robot-data-page.component.html',
  styleUrls: ['./robot-data-page.component.sass']
})
export class RobotDataPageComponent {
  constructor(robotData: RobotDataService) {

  }

}
