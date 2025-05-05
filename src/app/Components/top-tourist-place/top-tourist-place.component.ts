import { Component, OnInit } from '@angular/core';
import { TopTouristPlaceService } from 'src/app/top-tourist-place.service';
import { Place } from 'src/app/top-tourist-place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-tourist-place',
  templateUrl: './top-tourist-place.component.html',
  styleUrls: ['./top-tourist-place.component.css']
})
export class TopTouristPlaceComponent implements OnInit {
  topPlaces: Place[] = [];

  constructor(
    private topTouristPlaceService: TopTouristPlaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.topTouristPlaceService.getTopPlaces(4).subscribe(places => {
      this.topPlaces = places;
    });
  }

  navigateToPlacesPage() {
    this.router.navigate(['/top-tourist-place-page']);
  }
}