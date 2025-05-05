import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/travel.service';
import { TravelType } from 'src/app/travel-type.model';

@Component({
  selector: 'app-travel-types',
  templateUrl: './travel-types.component.html',
  styleUrls: ['./travel-types.component.css']
})
export class TravelTypesComponent implements OnInit {
  travelTypes: TravelType[] = [];
  currentIndex = 0;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
    this.loadTravelTypes();
  }

  loadTravelTypes() {
    this.travelService.getTravelTypes().subscribe({
      next: (types) => {
        this.travelTypes = types;
      },
      error: (err) => console.error('Error loading travel types:', err)
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.travelTypes.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.travelTypes.length) % this.travelTypes.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}