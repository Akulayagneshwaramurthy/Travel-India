import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFamilyTripsComponent } from './featured-family-trips.component';

describe('FeaturedFamilyTripsComponent', () => {
  let component: FeaturedFamilyTripsComponent;
  let fixture: ComponentFixture<FeaturedFamilyTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedFamilyTripsComponent]
    });
    fixture = TestBed.createComponent(FeaturedFamilyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
