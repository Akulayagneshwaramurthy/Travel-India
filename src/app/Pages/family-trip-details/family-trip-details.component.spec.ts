import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTripDetailsComponent } from './family-trip-details.component';

describe('FamilyTripDetailsComponent', () => {
  let component: FamilyTripDetailsComponent;
  let fixture: ComponentFixture<FamilyTripDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyTripDetailsComponent]
    });
    fixture = TestBed.createComponent(FamilyTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
