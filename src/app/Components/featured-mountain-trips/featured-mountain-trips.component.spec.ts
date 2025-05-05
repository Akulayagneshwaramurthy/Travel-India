import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMountainTripsComponent } from './featured-mountain-trips.component';

describe('FeaturedMountainTripsComponent', () => {
  let component: FeaturedMountainTripsComponent;
  let fixture: ComponentFixture<FeaturedMountainTripsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedMountainTripsComponent]
    });
    fixture = TestBed.createComponent(FeaturedMountainTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
