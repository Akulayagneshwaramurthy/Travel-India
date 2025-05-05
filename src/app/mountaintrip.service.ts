import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MountainTrip } from './mountaintrip.model';

@Injectable({
  providedIn: 'root'
})
export class MountainTripService {
  constructor(private firestore: AngularFirestore) {}

  getMountainTrips(limit?: number): Observable<MountainTrip[]> {
    if (limit) {
      return this.firestore.collection<MountainTrip>('mountaintrips', ref => ref.limit(limit)).valueChanges({ idField: 'id' });
    }
    return this.firestore.collection<MountainTrip>('mountaintrips').valueChanges({ idField: 'id' });
  }

  getMountainTripById(id: string): Observable<MountainTrip | undefined> {
    return this.firestore.collection('mountaintrips').doc<MountainTrip>(id).valueChanges();
  }
}