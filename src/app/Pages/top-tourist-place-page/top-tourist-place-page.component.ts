import { Component, OnInit } from '@angular/core';
import { TopTouristPlaceService } from 'src/app/top-tourist-place.service';
import { Place } from 'src/app/top-tourist-place.model';

@Component({
  selector: 'app-top-tourist-place-page',
  templateUrl: './top-tourist-place-page.component.html',
  styleUrls: ['./top-tourist-place-page.component.css']
})
export class TopTouristPlacePageComponent implements OnInit {
  places: Place[] = [];

  constructor(private topTouristPlaceService: TopTouristPlaceService) {}

  ngOnInit(): void {
    this.topTouristPlaceService.getAllPlaces().subscribe(places => {
      this.places = places;
    });
  }

  getRows(): number[] {
    const rowCount = Math.ceil(this.places.length / 4);
    return Array(rowCount).fill(0).map((x, i) => i);
  }

  getPlacesInRow(row: number): Place[] {
    const start = row * 4;
    const end = start + 4;
    return this.places.slice(start, end);
  }
}