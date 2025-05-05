import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TravelType } from './travel-type.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private collectionName = 'travelTypes';

  constructor(private firestore: AngularFirestore) { }

  getTravelTypes() {
    return this.firestore.collection<TravelType>(this.collectionName).valueChanges({ idField: 'id' });
  }

  addTravelType(travelType: TravelType) {
    return this.firestore.collection(this.collectionName).add(travelType);
  }
}