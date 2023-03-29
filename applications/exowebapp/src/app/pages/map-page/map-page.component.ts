import { Component, ViewChild } from '@angular/core';
import { PlanetMapComponent } from 'src/app/components/planet-map/planet-map.component';
import { PlanetDto } from 'src/app/components/planet.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.sass']
})
export class MapPageComponent {
  @ViewChild(PlanetMapComponent)
  planetMap!: PlanetMapComponent;

  onSelect(planet: PlanetDto | undefined) {
    this.planetMap.updateMap(planet);
    console.log("Updated Map Data");
  }


}
