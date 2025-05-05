import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MountainTripService } from 'src/app/mountaintrip.service';
import { MountainTrip } from 'src/app/mountaintrip.model';

@Component({
  selector: 'app-mountain-trip-details',
  templateUrl: './mountain-trip-details.component.html',
  styleUrls: ['./mountain-trip-details.component.css']
})
export class MountainTripDetailsComponent implements OnInit {
  trip: MountainTrip | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private mountainTripService: MountainTripService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mountainTripService.getMountainTripById(id).subscribe(trip => {
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