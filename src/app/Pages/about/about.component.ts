import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      image: 'team1.jpg',
      name: 'Rajiv Sharma',
      position: 'Founder & CEO'
    },
    {
      image: 'team2.jpg',
      name: 'Priya Patel',
      position: 'Head of Operations'
    },
    {
      image: 'team3.jpg',
      name: 'Arjun Mehta',
      position: 'Tour Designer'
    }
  ];

  values = [
    {
      icon: 'fa-hands-helping',
      title: 'Authenticity',
      description: 'We provide genuine experiences that reflect the real India beyond tourist clichés.'
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainability',
      description: 'We\'re committed to eco-friendly practices and supporting local communities.'
    },
    {
      icon: 'fa-smile',
      title: 'Customer Joy',
      description: 'Your satisfaction and memorable experiences are our top priority.'
    },
    {
      icon: 'fa-gem',
      title: 'Expertise',
      description: 'Our team has in-depth knowledge of every region we operate in.'
    }
  ];
}