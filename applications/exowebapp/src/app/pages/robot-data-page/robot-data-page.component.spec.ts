import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotDataPageComponent } from './robot-data-page.component';

describe('RobotDataPageComponent', () => {
  let component: RobotDataPageComponent;
  let fixture: ComponentFixture<RobotDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobotDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
