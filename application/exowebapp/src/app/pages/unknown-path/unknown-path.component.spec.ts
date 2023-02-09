import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownPathComponent } from './unknown-path.component';

describe('UnknownPathComponent', () => {
  let component: UnknownPathComponent;
  let fixture: ComponentFixture<UnknownPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnknownPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
