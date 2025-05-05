import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FamilyTrip } from './familytrip.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyTripService {
  constructor(private firestore: AngularFirestore) {}

  getFamilyTrips(limit?: number): Observable<FamilyTrip[]> {
    if (limit) {
      return this.firestore.collection<FamilyTrip>('familytrip', ref => ref.limit(limit)).valueChanges({ idField: 'id' });
    }
    return this.firestore.collection<FamilyTrip>('familytrip').valueChanges({ idField: 'id' });
  }

  getFamilyTripById(id: string): Observable<FamilyTrip | undefined> {
    return this.firestore.collection('familytrip').doc<FamilyTrip>(id).valueChanges();
  }
}