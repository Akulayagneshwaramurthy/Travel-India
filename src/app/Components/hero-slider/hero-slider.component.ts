import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationService } from 'src/app/destination.service';
import { Destination } from 'src/app/destination.model';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  destinations: Destination[] = [];
  currentSlide = 0;
  isLoading = true;
  private autoSlideSubscription!: Subscription;

  constructor(
    private destinationService: DestinationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFeaturedDestinations();
  }

  ngOnDestroy(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }

  loadFeaturedDestinations() {
    this.destinationService.getFeaturedDestinations().subscribe({
      next: (data) => {
        this.destinations = data;
        this.isLoading = false;
        this.startAutoSlide();
      },
      error: (err) => {
        console.error('Error loading destinations:', err);
        this.isLoading = false;
      }
    });
  }

  startAutoSlide() {
    this.autoSlideSubscription = interval(15000).subscribe(() => {
      if (this.destinations.length > 0) {
        this.nextSlide();
      }
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.destinations.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.destinations.length) % this.destinations.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  exploreDestination(destinationId: string) {
    this.router.navigate(['/destinations', destinationId]);
  }
}