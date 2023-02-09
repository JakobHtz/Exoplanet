import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotPositionPageComponent } from './robot-position-page.component';

describe('RobotPositionPageComponent', () => {
  let component: RobotPositionPageComponent;
  let fixture: ComponentFixture<RobotPositionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotPositionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotPositionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
