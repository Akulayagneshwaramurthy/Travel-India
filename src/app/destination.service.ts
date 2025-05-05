import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Destination } from './destination.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  constructor(private firestore: AngularFirestore) { }

  getFeaturedDestinations() {
    return this.firestore.collection<Destination>('destinations', ref => 
      ref.where('isFeatured', '==', true).limit(4)
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Destination;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getHoneymoonDestinations() {
    return this.firestore.collection<Destination>('destinations', ref => 
      ref.where('category', '==', 'honeymoon')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Destination;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  getHolidayDestinations() {
    return this.firestore.collection<Destination>('destinations', ref => 
      ref.where('category', '==', 'holiday')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Destination;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }
}