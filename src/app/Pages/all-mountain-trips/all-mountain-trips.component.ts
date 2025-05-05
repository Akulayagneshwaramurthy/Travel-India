import { Component } from '@angular/core';
import { MountainTripService } from 'src/app/mountaintrip.service';
import { MountainTrip } from 'src/app/mountaintrip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-mountain-trips',
  templateUrl: './all-mountain-trips.component.html',
  styleUrls: ['./all-mountain-trips.component.css']
})
export class AllMountainTripsComponent {
  trips: MountainTrip[] = [];
  
  constructor(private mountainTripService: MountainTripService, private router: Router) {
    this.loadAllTrips();
  }

  loadAllTrips() {
    this.mountainTripService.getMountainTrips().subscribe(trips => {
      this.trips = trips;
    });
  }

  viewDetails(tripId: string) {
    this.router.navigate(['/mountain-trip', tripId]);
  }
}