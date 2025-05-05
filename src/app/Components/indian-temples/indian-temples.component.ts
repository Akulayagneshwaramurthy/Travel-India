// indian-temples.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Temple {
  id: string;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-indian-temples',
  templateUrl: './indian-temples.component.html',
  styleUrls: ['./indian-temples.component.css']
})
export class IndianTemplesComponent implements OnInit {
  temples$: Observable<Temple[]>;
  currentSlideIndex = 0;

  constructor(private firestore: AngularFirestore) {
    // Initialize the temples$ observable to fetch data from Firebase
    this.temples$ = this.firestore.collection<Temple>('temples').valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
    // Set up automatic slider transition every 3 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide(): void {
    // This will be executed when temples data is available
    this.temples$.subscribe(temples => {
      if (temples.length > 0) {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % temples.length;
      }
    });
  }

  prevSlide(): void {
    // This will be executed when temples data is available
    this.temples$.subscribe(temples => {
      if (temples.length > 0) {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + temples.length) % temples.length;
      }
    });
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}