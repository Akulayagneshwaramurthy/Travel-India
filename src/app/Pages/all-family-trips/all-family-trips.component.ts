import { Component } from '@angular/core';
import { FamilyTripService } from 'src/app/familytrip.service';
import { FamilyTrip } from 'src/app/familytrip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-family-trips',
  templateUrl: './all-family-trips.component.html',
  styleUrls: ['./all-family-trips.component.css']
})
export class AllFamilyTripsComponent {
  trips: FamilyTrip[] = [];
  
  constructor(private familyTripService: FamilyTripService, private router: Router) {
    this.loadAllTrips();
  }

  loadAllTrips() {
    this.familyTripService.getFamilyTrips().subscribe(trips => {
      this.trips = trips;
    });
  }

  viewDetails(tripId: string) {
    this.router.navigate(['/family-trip', tripId]);
  }
}