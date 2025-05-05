import { Component } from '@angular/core';

// Define the HelpTopic interface
interface HelpTopic {
  title: string;
  icon: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.component.html',
  styleUrls: ['./helppage.component.css']
})
export class HelppageComponent {
  currentYear = new Date().getFullYear();
  companyName = 'Travel India';

  topics: HelpTopic[] = [
    {
      title: 'Booking Assistance',
      icon: 'fa-calendar-check',
      description: 'Get help with making new bookings or modifying existing ones',
      link: '/faq#booking'
    },
    {
      title: 'Payment Issues',
      icon: 'fa-credit-card',
      description: 'Resolve payment problems and understand refund policies',
      link: '/faq#payments'
    },
    {
      title: 'Cancellation Help',
      icon: 'fa-times-circle',
      description: 'Learn about cancellation procedures and refund timelines',
      link: '/faq#cancellations'
    },
    {
      title: 'Travel Documents',
      icon: 'fa-passport',
      description: 'Information about visas, passports and required documents',
      link: '/faq#documents'
    },
    {
      title: 'Emergency Support',
      icon: 'fa-phone-alt',
      description: '24/7 emergency contact for travelers in distress',
      link: '/contact'
    },
    {
      title: 'Feedback & Complaints',
      icon: 'fa-comment-alt',
      description: 'Share your experience or file a complaint',
      link: '/contact'
    }
  ];
}