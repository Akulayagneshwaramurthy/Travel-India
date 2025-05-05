import { Component } from '@angular/core';
import { MountainTripService } from 'src/app/mountaintrip.service';
import { MountainTrip } from 'src/app/mountaintrip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-mountain-trips',
  templateUrl: './featured-mountain-trips.component.html',
  styleUrls: ['./featured-mountain-trips.component.css']
})
export class FeaturedMountainTripsComponent {
  trips: MountainTrip[] = [];
  
  constructor(private mountainTripService: MountainTripService, private router: Router) {
    this.loadTrips();
  }

  loadTrips() {
    this.mountainTripService.getMountainTrips(6).subscribe(trips => {
      this.trips = trips;
    });
  }

  viewAll() {
    this.router.navigate(['/all-mountain-trips']);
  }

  viewDetails(tripId: string) {
    this.router.navigate(['/mountain-trip', tripId]);
  }
}