import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetMapComponent } from './planet-map.component';

describe('PlanetMapComponent', () => {
  let component: PlanetMapComponent;
  let fixture: ComponentFixture<PlanetMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
