import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFamilyTripsComponent } from './all-family-trips.component';

describe('AllFamilyTripsComponent', () => {
  let component: AllFamilyTripsComponent;
  let fixture: ComponentFixture<AllFamilyTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFamilyTripsComponent]
    });
    fixture = TestBed.createComponent(AllFamilyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
