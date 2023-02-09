import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotPositionTableComponent } from './robot-position-table.component';

describe('RobotPositionTableComponent', () => {
  let component: RobotPositionTableComponent;
  let fixture: ComponentFixture<RobotPositionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotPositionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotPositionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
