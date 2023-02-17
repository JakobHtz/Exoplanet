import { Component } from '@angular/core';
import { RobotDataService, RobotDto } from '../robot-data.service';

@Component({
  selector: 'app-robot-data-table',
  templateUrl: './robot-data-table.component.html',
  styleUrls: ['./robot-data-table.component.sass']
})
export class RobotDataTableComponent {
  robotData: RobotDto[] = [];
  displayedColumns: string[] = ['RID', 'x_pos', 'y_pos', 'dir'];

  constructor(private robotDataService: RobotDataService) {
    this.robotDataService.getRobots().subscribe((data) => {
      this.robotData = data;
    });
  }
}
