import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TempleService } from 'src/app/temple.service';
import { AllTemple } from 'src/app/alltemple.model';

@Component({
  selector: 'app-temple-details',
  templateUrl: './temple-details.component.html',
  styleUrls: ['./temple-details.component.css']
})
export class TempleDetailsComponent implements OnInit {
  temple: AllTemple | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private templeService: TempleService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.templeService.getTempleById(id).subscribe(temple => {
        this.temple = temple || null;
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