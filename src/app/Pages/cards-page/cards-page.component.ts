import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopTouristPlaceService } from 'src/app/top-tourist-place.service';
import { Place } from 'src/app/top-tourist-place.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripBookingService } from 'src/app/trip-booking.service';
import { TripBooking } from 'src/app/trip-booking.model';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css']
})
export class CardsPageComponent implements OnInit {
  place: Place | null = null;
  images: string[] = [];
  currentImageIndex = 0;
  isLoading = true;
  error: string | null = null;
  showTripForm = false;
  showConfirmation = false;
  tripForm: FormGroup;
  confirmedTrip: TripBooking | null = null;
  showMembersInput = false;

  constructor(
    private route: ActivatedRoute,
    private topTouristPlaceService: TopTouristPlaceService,
    private fb: FormBuilder,
    private tripBookingService: TripBookingService
  ) {
    this.tripForm = this.fb.group({
      tripType: ['', Validators.required],
      members: [null],
      transportation: ['', Validators.required],
      budget: ['', Validators.required],
      localTransportation: ['', Validators.required],
      foodCost: ['', Validators.required],
      hotelCost: ['', Validators.required],
      days: [1, [Validators.required, Validators.min(1)]],
      nights: [1, [Validators.required, Validators.min(1)]],
      travelDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (!id) {
      this.error = 'No place ID provided';
      this.isLoading = false;
      return;
    }

    this.topTouristPlaceService.getPlaceById(id).subscribe({
      next: (place: Place | null) => {
        if (!place) {
          this.error = 'Place not found';
          this.isLoading = false;
          return;
        }

        this.place = place;
        this.images = place.imageUrls && place.imageUrls.length > 0 
          ? place.imageUrls 
          : [place.imageUrl || 'https://via.placeholder.com/300'];
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load place details';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  nextImage() {
    if (this.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  }

  prevImage() {
    if (this.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }

  openTripForm() {
    this.showTripForm = true;
  }

  closeTripForm() {
    this.showTripForm = false;
    this.tripForm.reset({
      tripType: '',
      members: null,
      transportation: '',
      budget: '',
      localTransportation: '',
      foodCost: '',
      hotelCost: '',
      days: 1,
      nights: 1,
      travelDate: ''
    });
    this.showMembersInput = false;
  }

  onTripTypeChange() {
    const tripType = this.tripForm.get('tripType')?.value;
    this.showMembersInput = tripType === 'family' || tripType === 'friends';
    const membersControl = this.tripForm.get('members');
    if (this.showMembersInput) {
      membersControl?.setValidators([Validators.required, Validators.min(1)]);
    } else {
      membersControl?.clearValidators();
      membersControl?.setValue(null);
    }
    membersControl?.updateValueAndValidity();
  }

  async submitTrip() {
    if (this.tripForm.valid && this.place) {
      const trip: TripBooking = {
        placeId: this.route.snapshot.paramMap.get('id') || '',
        placeName: this.place.name,
        tripType: this.tripForm.get('tripType')?.value,
        members: this.tripForm.get('members')?.value,
        transportation: this.tripForm.get('transportation')?.value,
        budget: this.tripForm.get('budget')?.value,
        localTransportation: this.tripForm.get('localTransportation')?.value,
        foodCost: this.tripForm.get('foodCost')?.value,
        hotelCost: this.tripForm.get('hotelCost')?.value,
        days: this.tripForm.get('days')?.value,
        nights: this.tripForm.get('nights')?.value,
        travelDate: this.tripForm.get('travelDate')?.value,
        guideName: 'John Doe',
        guideContact: '+91-9876543210'
      };
      
      try {
        await this.tripBookingService.bookTrip(trip);
        this.confirmedTrip = trip;
        this.showTripForm = false;
        this.showConfirmation = true;
        this.tripForm.reset({
          tripType: '',
          members: null,
          transportation: '',
          budget: '',
          localTransportation: '',
          foodCost: '',
          hotelCost: '',
          days: 1,
          nights: 1,
          travelDate: ''
        });
        this.showMembersInput = false;
      } catch (error) {
        console.error('Failed to book trip:', error);
        this.error = 'Failed to book trip. Please try again.';
      }
    }
  }

  closeConfirmation() {
    this.showConfirmation = false;
    this.confirmedTrip = null;
  }
}