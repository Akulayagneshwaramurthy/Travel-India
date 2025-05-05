import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamilyTripService } from 'src/app/familytrip.service';
import { FamilyTrip } from 'src/app/familytrip.model';

@Component({
  selector: 'app-family-trip-details',
  templateUrl: './family-trip-details.component.html',
  styleUrls: ['./family-trip-details.component.css']
})
export class FamilyTripDetailsComponent implements OnInit {
  trip: FamilyTrip | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private familyTripService: FamilyTripService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.familyTripService.getFamilyTripById(id).subscribe(trip => {
        this.trip = trip || null;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  getCostRange(cost: { low: number; medium: number; high: number } | undefined): string {
    if (!cost) return 'Not available';
    return `₹${cost.low} - ₹${cost.high}`;
  }
}