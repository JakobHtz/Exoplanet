import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataPageComponent } from './table-data-page.component';

describe('TableDataPageComponent', () => {
  let component: TableDataPageComponent;
  let fixture: ComponentFixture<TableDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
