export interface AllCouple {
    id?: string;
    name: string;
    imageUrl: string;
    flightCost?: { low: number; medium: number; high: number };
    trainCost?: { low: number; medium: number; high: number };
    busCost?: { low: number; medium: number; high: number };
    localTravelCost?: { auto: number; taxi: number; rental: number };
    foodCost?: { low: number; medium: number; high: number };
    hotelCost?: { low: number; medium: number; high: number };
    bestSeason?: string;
    history?: string;
  }