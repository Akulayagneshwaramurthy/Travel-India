import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripBooking } from './trip-booking.model';

@Injectable({
  providedIn: 'root'
})
export class TripBookingService {
  private tripsCollection = collection(this.firestore, 'trips');

  constructor(private firestore: Firestore) {}

  async bookTrip(trip: TripBooking): Promise<void> {
    try {
      await addDoc(this.tripsCollection, trip);
    } catch (error) {
      console.error('Error booking trip:', error);
      throw error;
    }
  }

  getBookedTrips(): Observable<TripBooking[]> {
    return collectionData(this.tripsCollection, { idField: 'id' }).pipe(
      map((trips: any[]) =>
        trips.map(trip => ({
          id: trip.id,
          placeId: trip.placeId || '',
          placeName: trip.placeName || 'Unknown Place',
          tripType: trip.tripType || '',
          members: trip.members ?? null,
          transportation: trip.transportation || '',
          budget: trip.budget || '',
          localTransportation: trip.localTransportation || '',
          foodCost: trip.foodCost || '',
          hotelCost: trip.hotelCost || '',
          days: trip.days || 1,
          nights: trip.nights || 1,
          travelDate: trip.travelDate || '',
          guideName: trip.guideName || 'Unknown Guide',
          guideContact: trip.guideContact || ''
        } as TripBooking))
      )
    );
  }
}