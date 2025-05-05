export interface TripBooking {
    id?: string;
    placeId: string;
    placeName: string;
    tripType: string;
    members?: number | null;
    transportation: string;
    budget: string;
    localTransportation: string;
    foodCost: string;
    hotelCost: string;
    days: number;
    nights: number;
    travelDate: string;
    guideName: string;
    guideContact: string;
  }