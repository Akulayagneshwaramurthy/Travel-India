import { Component } from '@angular/core';
import { TempleService } from 'src/app/temple.service';
import { AllTemple } from 'src/app/alltemple.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-temples',
  templateUrl: './top-temples.component.html',
  styleUrls: ['./top-temples.component.css']
})
export class TopTemplesComponent {
  temples: AllTemple[] = [];
  
  constructor(private templeService: TempleService, private router: Router) {
    this.loadTemples();
  }

  loadTemples() {
    this.templeService.getTemples(6).subscribe(temples => {
      this.temples = temples;
    });
  }

  viewAll() {
    this.router.navigate(['/all-temples']);
  }

  viewDetails(templeId: string) {
    this.router.navigate(['/temple', templeId]);
  }
}