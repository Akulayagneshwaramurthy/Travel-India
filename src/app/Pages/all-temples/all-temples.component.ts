import { Component } from '@angular/core';
import { TempleService } from 'src/app/temple.service';
import { AllTemple } from 'src/app/alltemple.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-temples',
  templateUrl: './all-temples.component.html',
  styleUrls: ['./all-temples.component.css']
})
export class AllTemplesComponent {
  temples: AllTemple[] = [];
  
  constructor(private templeService: TempleService, private router: Router) {
    this.loadAllTemples();
  }

  loadAllTemples() {
    this.templeService.getTemples().subscribe(temples => {
      this.temples = temples;
    });
  }

  viewDetails(templeId: string) {
    this.router.navigate(['/temple', templeId]);
  }
}