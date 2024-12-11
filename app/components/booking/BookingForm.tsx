'use client';

import { useState } from 'react';
import { LocationSearch } from './LocationSearch';
import { VehicleSelector } from './VehicleSelector';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Location, Vehicle } from '@/app/types';

const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    type: 'MINI',
    basePrice: 50,
    pricePerKm: 12,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '2',
    type: 'SEDAN',
    basePrice: 80,
    pricePerKm: 15,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: '3',
    type: 'SUV',
    basePrice: 100,
    pricePerKm: 18,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop&q=60'
  }
];

export function BookingForm() {
  const [pickup, setPickup] = useState<Location | null>(null);
  const [dropoff, setDropoff] = useState<Location | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleBooking = async () => {
    if (!pickup || !dropoff || !selectedVehicle) return;
    
    // TODO: Implement actual booking logic and payment integration
    console.log('Booking:', { pickup, dropoff, selectedVehicle });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <LocationSearch
          placeholder="Enter pickup location"
          onLocationSelect={setPickup}
        />
        <LocationSearch
          placeholder="Enter drop-off location"
          onLocationSelect={setDropoff}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select Vehicle Type</h3>
        <VehicleSelector
          vehicles={MOCK_VEHICLES}
          selectedVehicle={selectedVehicle}
          onSelect={setSelectedVehicle}
        />
      </div>

      <Button
        className="w-full"
        size="lg"
        disabled={!pickup || !dropoff || !selectedVehicle}
        onClick={handleBooking}
      >
        Book Now
      </Button>
    </Card>
  );
}