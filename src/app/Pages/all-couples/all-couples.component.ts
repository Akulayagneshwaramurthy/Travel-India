import { Component } from '@angular/core';
import { CoupleService } from 'src/app/couple.service';
import { AllCouple } from 'src/app/allcouple.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-couples',
  templateUrl: './all-couples.component.html',
  styleUrls: ['./all-couples.component.css']
})
export class AllCouplesComponent {
  couples: AllCouple[] = [];
  
  constructor(private coupleService: CoupleService, private router: Router) {
    this.loadAllCouples();
  }

  loadAllCouples() {
    this.coupleService.getCouples().subscribe(couples => {
      this.couples = couples;
    });
  }

  viewDetails(coupleId: string) {
    this.router.navigate(['/couple', coupleId]);
  }
}