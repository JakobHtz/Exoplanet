import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDropDownComponent } from './planet-drop-down.component';

describe('PlanetDropDownComponent', () => {
  let component: PlanetDropDownComponent;
  let fixture: ComponentFixture<PlanetDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
