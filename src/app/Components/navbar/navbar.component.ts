import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  url = './assets/Screenshot_2025-04-29_223306-removebg-preview.png';
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToAuth(type: 'login' | 'signup'): void {
    this.router.navigate(['/welcome'], { fragment: type });
    if (this.isMenuOpen) {
      this.toggleMenu(); // Close mobile menu if open
    }
  }
}