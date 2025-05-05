import { Component } from '@angular/core';
import { FamilyTripService } from 'src/app/familytrip.service';
import { FamilyTrip } from 'src/app/familytrip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-family-trips',
  templateUrl: './featured-family-trips.component.html',
  styleUrls: ['./featured-family-trips.component.css']
})
export class FeaturedFamilyTripsComponent {
  trips: FamilyTrip[] = [];
  
  constructor(private familyTripService: FamilyTripService, private router: Router) {
    this.loadTrips();
  }

  loadTrips() {
    this.familyTripService.getFamilyTrips(6).subscribe(trips => {
      this.trips = trips;
    });
  }

  viewAll() {
    this.router.navigate(['/all-family-trips']);
  }

  viewDetails(tripId: string) {
    this.router.navigate(['/family-trip', tripId]);
  }
}