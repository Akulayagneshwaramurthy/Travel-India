import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  currentYear = new Date().getFullYear();
  companyName = 'Travel India';

  faqs: FaqItem[] = [
    {
      question: 'How do I book a tour with Travel India?',
      answer: 'You can book directly through our website by selecting your preferred tour and following the booking process, or contact our customer service team for assistance.',
      isOpen: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, net banking, UPI, and in some cases, cash payments at our offices.',
      isOpen: false
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 30 days before departure receive a full refund. Between 15-29 days, 50% refund. Less than 15 days, no refund but we offer rescheduling options.',
      isOpen: false
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we partner with leading insurance providers to offer comprehensive travel insurance packages with all our tours.',
      isOpen: false
    },
    {
      question: 'Can I customize my tour itinerary?',
      answer: 'Absolutely! We specialize in customized tours. Contact our tour designers to create your perfect itinerary.',
      isOpen: false
    }
  ];

  toggleFaq(faq: FaqItem) {
    faq.isOpen = !faq.isOpen;
  }
}