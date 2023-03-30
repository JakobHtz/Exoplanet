import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PlanetDataTableComponent } from 'src/app/components/planet-data-table/planet-data-table.component';
import { PlanetDto } from 'src/app/components/planet.service';
import { RobotDataTableComponent } from 'src/app/components/robot-data-table/robot-data-table.component';

@Component({
  selector: 'app-table-data-page',
  templateUrl: './table-data-page.component.html',
  styleUrls: ['./table-data-page.component.sass']
})
export class TableDataPageComponent implements OnInit, OnDestroy {
  @ViewChild(RobotDataTableComponent)
  robotTable!: RobotDataTableComponent;
  currentPlanet!: PlanetDto;
  requestInterval!: Subscription;

  @ViewChild(PlanetDataTableComponent)
  planetDataTable!: PlanetDataTableComponent;

  ngOnInit(): void {
    this.requestInterval = interval(3000).subscribe(() => {
      this.onSelect(this.currentPlanet);
    });
  }

  ngOnDestroy(): void {
    this.requestInterval.unsubscribe();
  }

  onSelect(planet: PlanetDto) {
    this.currentPlanet = planet;
    this.planetDataTable.setPlanet(planet);
    this.robotTable.setPlanet(planet);
    console.log("Selected " + planet);
  }
}
