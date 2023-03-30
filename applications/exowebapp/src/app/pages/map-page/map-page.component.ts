import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PlanetMapComponent } from 'src/app/components/planet-map/planet-map.component';
import { PlanetDto } from 'src/app/components/planet.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.sass']
})
export class MapPageComponent  implements OnInit, OnDestroy{
  @ViewChild(PlanetMapComponent)
  planetMap!: PlanetMapComponent;
  currentPlanet: PlanetDto | undefined;
  requestInterval!: Subscription;

  ngOnInit(): void {
    this.requestInterval = interval(3000).subscribe(() => {
      this.onSelect(this.currentPlanet);
    });
  }

  ngOnDestroy(): void {
    this.requestInterval.unsubscribe();
  }

  onSelect(planet: PlanetDto | undefined) {
    this.currentPlanet = planet;
    this.planetMap.updateMap(planet);
    console.log("Updated Map Data");
  }
}
