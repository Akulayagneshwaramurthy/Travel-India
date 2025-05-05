export interface Place {
  id?: string;
  name: string;
  imageUrl?: string;
  imageUrls?: string[];
  flightCost?: { low: number; medium: number; high: number };
  trainCost?: { low: number; medium: number; high: number };
  busCost?: { low: number; medium: number; high: number };
  localTravelCost?: { auto: number; taxi: number; rental: number };
  foodCost?: { low: number; medium: number; high: number };
  hotelCost?: { low: number; medium: number; high: number };
  bestSeason?: string;
  history?: string;
  bestPlaces?: string[];
  mustTry?: string[];
}