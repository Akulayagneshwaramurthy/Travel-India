import { Component } from '@angular/core';
import { CoupleService } from 'src/app/couple.service';
import { AllCouple } from 'src/app/allcouple.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-couples',
  templateUrl: './top-couples.component.html',
  styleUrls: ['./top-couples.component.css']
})
export class TopCouplesComponent {
  couples: AllCouple[] = [];
  
  constructor(private coupleService: CoupleService, private router: Router) {
    this.loadCouples();
  }

  loadCouples() {
    this.coupleService.getCouples(6).subscribe(couples => {
      this.couples = couples;
    });
  }

  viewAll() {
    this.router.navigate(['/all-couples']);
  }

  viewDetails(coupleId: string) {
    this.router.navigate(['/couple', coupleId]);
  }
}