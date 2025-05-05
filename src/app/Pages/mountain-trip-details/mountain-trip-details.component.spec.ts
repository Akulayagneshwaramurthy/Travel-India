import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainTripDetailsComponent } from './mountain-trip-details.component';

describe('MountainTripDetailsComponent', () => {
  let component: MountainTripDetailsComponent;
  let fixture: ComponentFixture<MountainTripDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountainTripDetailsComponent]
    });
    fixture = TestBed.createComponent(MountainTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
