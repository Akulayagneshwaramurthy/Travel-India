import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoupleService } from 'src/app/couple.service';
import { AllCouple } from 'src/app/allcouple.model';

@Component({
  selector: 'app-couple-details',
  templateUrl: './couple-details.component.html',
  styleUrls: ['./couple-details.component.css']
})
export class CoupleDetailsComponent implements OnInit {
  couple: AllCouple | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private coupleService: CoupleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coupleService.getCoupleById(id).subscribe(couple => {
        this.couple = couple || null;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  getCostRange(cost: { low: number; medium: number; high: number } | undefined): string {
    if (!cost) return 'Not available';
    return `₹${cost.low} - ₹${cost.high}`;
  }
}