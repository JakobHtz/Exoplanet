import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDataTableComponent } from './planet-data-table.component';

describe('PlanetDataTableComponent', () => {
  let component: PlanetDataTableComponent;
  let fixture: ComponentFixture<PlanetDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
