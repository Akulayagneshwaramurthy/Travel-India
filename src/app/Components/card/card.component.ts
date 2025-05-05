import { Component, Input } from '@angular/core';
import { Place } from 'src/app/top-tourist-place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() place!: Place;

  constructor(private router: Router) {}

  navigateToCardPage() {
    this.router.navigate(['/cards-page', this.place.id]);
  }
}