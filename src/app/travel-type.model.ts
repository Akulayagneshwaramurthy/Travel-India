export interface TravelType {
    id?: string; // Optional for Firebase
    title: string;
    description: string;
    imageUrl: string;
    category: 'solo' | 'family' | 'friends' | 'couple';
  }