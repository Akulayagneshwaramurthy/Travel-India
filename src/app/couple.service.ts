import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AllCouple } from './allcouple.model';

@Injectable({
  providedIn: 'root'
})
export class CoupleService {
  constructor(private firestore: AngularFirestore) {}

  getCouples(limit?: number): Observable<AllCouple[]> {
    if (limit) {
      return this.firestore.collection<AllCouple>('allcouple', ref => ref.limit(limit)).valueChanges({ idField: 'id' });
    }
    return this.firestore.collection<AllCouple>('allcouple').valueChanges({ idField: 'id' });
  }

  getCoupleById(id: string): Observable<AllCouple | undefined> {
    return this.firestore.collection('allcouple').doc<AllCouple>(id).valueChanges();
  }
}