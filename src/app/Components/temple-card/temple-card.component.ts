import { Component, Input } from '@angular/core';
import { Temple } from 'src/app/temple.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temple-card',
  templateUrl: './temple-card.component.html',
  styleUrls: ['./temple-card.component.css']
})
export class TempleCardComponent {
  @Input() temple!: Temple;

  constructor(private router: Router) {}

  navigateToTempleDetails() {
    this.router.navigate(['/temple-details', this.temple.id]);
  }
}