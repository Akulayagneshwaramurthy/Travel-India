import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripBookingComponent } from './my-trip-booking.component';

describe('MyTripBookingComponent', () => {
  let component: MyTripBookingComponent;
  let fixture: ComponentFixture<MyTripBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTripBookingComponent]
    });
    fixture = TestBed.createComponent(MyTripBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
