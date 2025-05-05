import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AllTemple } from './alltemple.model';

@Injectable({
  providedIn: 'root'
})
export class TempleService {
  constructor(private firestore: AngularFirestore) {}

  getTemples(limit?: number): Observable<AllTemple[]> {
    if (limit) {
      return this.firestore.collection<AllTemple>('alltemple', ref => ref.limit(limit)).valueChanges({ idField: 'id' });
    }
    return this.firestore.collection<AllTemple>('alltemple').valueChanges({ idField: 'id' });
  }

  getTempleById(id: string): Observable<AllTemple | undefined> {
    return this.firestore.collection('alltemple').doc<AllTemple>(id).valueChanges();
  }
}