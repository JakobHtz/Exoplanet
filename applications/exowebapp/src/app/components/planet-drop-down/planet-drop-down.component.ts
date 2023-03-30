import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PlanetDto, PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-drop-down',
  templateUrl: './planet-drop-down.component.html',
  styleUrls: ['./planet-drop-down.component.sass']
})
export class PlanetDropDownComponent {
  planets: PlanetDto[] = [];
  selectedPlanet: PlanetDto | undefined | null = null;

  @Input()
  defaultDisplay!: string;

  @Output()
  selected = new EventEmitter<PlanetDto>();

  constructor (private planetService: PlanetService) {}

  onClick() {
    this.fetchPlanets();
  }

  onSelect(planet: PlanetDto | undefined | null) {
    this.selectedPlanet = planet;
    if (!planet) {
      planet = new PlanetDto();
      planet.planet_name = "";
    }
    this.selected.emit(planet);
  }

  fetchPlanets() {
    this.planetService.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

  getSelectedPlanetName(): string | undefined {
    return this.selectedPlanet && this.selectedPlanet.planet_name != '' ?  this.selectedPlanet?.planet_name: this.defaultDisplay;
  }
}
