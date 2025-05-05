import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from './top-tourist-place.model';

@Injectable({
  providedIn: 'root'
})
export class TopTouristPlaceService {

  
  private placesCollection = collection(this.firestore, 'places');

  constructor(private firestore: Firestore) {}

  getPlaceById(id: string): Observable<Place | null> {
    const placeRef = doc(this.firestore, `places/${id}`);
    return from(getDoc(placeRef)).pipe(
      map(docSnap => {
        if (!docSnap.exists()) return null;
        const data = docSnap.data() as Partial<Place>; // Use Partial<Place> for flexibility
        return {
          ...data,
          id: docSnap.id,
          name: data.name || 'Unknown Place', // Ensure required field
          bestPlaces: this.parseStringOrArray(data.bestPlaces),
          mustTry: this.parseStringOrArray(data.mustTry)
        } as Place;
      })
    );
  }

  getTopPlaces(limit: number): Observable<Place[]> {
    return collectionData(this.placesCollection, { idField: 'id' }).pipe(
      map((places: any[]) =>
        places.slice(0, limit).map(place => ({
          ...place,
          name: place.name || 'Unknown Place', // Ensure required field
          bestPlaces: this.parseStringOrArray(place.bestPlaces),
          mustTry: this.parseStringOrArray(place.mustTry)
        } as Place))
      )
    );
  }

  getAllPlaces(): Observable<Place[]> {
    return collectionData(this.placesCollection, { idField: 'id' }).pipe(
      map((places: any[]) =>
        places.map(place => ({
          ...place,
          name: place.name || 'Unknown Place', // Ensure required field
          bestPlaces: this.parseStringOrArray(place.bestPlaces),
          mustTry: this.parseStringOrArray(place.mustTry)
        } as Place))
      )
    );
  }

  private parseStringOrArray(value: unknown): string[] {
    if (Array.isArray(value)) {
      return value.map(item => String(item).trim());
    }
    if (typeof value === 'string') {
      return value.split(',').map(item => item.trim()).filter(item => item);
    }
    return [];
  }
}