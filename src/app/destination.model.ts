// models/destination.model.ts
export interface Destination {
    id?: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
    category: 'honeymoon' | 'holiday' | 'adventure'; // Filter by type
    price: number;
    discount?: number;
    rating: number;
    isFeatured: boolean;
  }