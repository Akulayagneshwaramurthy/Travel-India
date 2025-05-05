import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMountainTripsComponent } from './all-mountain-trips.component';

describe('AllMountainTripsComponent', () => {
  let component: AllMountainTripsComponent;
  let fixture: ComponentFixture<AllMountainTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMountainTripsComponent]
    });
    fixture = TestBed.createComponent(AllMountainTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
