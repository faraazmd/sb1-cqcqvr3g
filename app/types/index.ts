export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Booking {
  id: string;
  pickupLocation: Location;
  dropLocation: Location;
  fare: number;
  distance: number;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'COMPLETED';
  createdAt: Date;
}

export interface Vehicle {
  id: string;
  type: 'MINI' | 'SEDAN' | 'SUV';
  basePrice: number;
  pricePerKm: number;
  image: string;
}