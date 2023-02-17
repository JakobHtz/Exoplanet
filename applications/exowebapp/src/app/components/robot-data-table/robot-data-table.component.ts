import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
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
    console.log("INIT");
    this.robotDataService.getRobots().subscribe((data) => {
      this.robotData = data;
      console.log(data);
    });
  }
}
