import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDataPageComponent } from './planet-data-page.component';

describe('PlanetDataPageComponent', () => {
  let component: PlanetDataPageComponent;
  let fixture: ComponentFixture<PlanetDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
