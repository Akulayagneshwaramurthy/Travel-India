import { Component, OnInit } from '@angular/core';
import { TripBookingService } from 'src/app/trip-booking.service';
import { TripBooking } from 'src/app/trip-booking.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-trip-booking',
  templateUrl: './my-trip-booking.component.html',
  styleUrls: ['./my-trip-booking.component.css']
})
export class MyTripBookingComponent implements OnInit {
  bookedTrips$: Observable<TripBooking[]> | null = null;

  constructor(private tripBookingService: TripBookingService) {}

  ngOnInit(): void {
    this.bookedTrips$ = this.tripBookingService.getBookedTrips();
  }
}