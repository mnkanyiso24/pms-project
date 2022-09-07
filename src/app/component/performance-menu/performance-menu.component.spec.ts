import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMenuComponent } from './performance-menu.component';

describe('PerformanceMenuComponent', () => {
  let component: PerformanceMenuComponent;
  let fixture: ComponentFixture<PerformanceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
