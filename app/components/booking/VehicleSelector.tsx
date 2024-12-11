'use client';

import { Vehicle } from '@/app/types';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface VehicleSelectorProps {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  onSelect: (vehicle: Vehicle) => void;
}

export function VehicleSelector({ vehicles, selectedVehicle, onSelect }: VehicleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => (
        <Card
          key={vehicle.id}
          className={cn(
            'p-4 cursor-pointer transition-all',
            selectedVehicle?.id === vehicle.id
              ? 'border-primary shadow-lg'
              : 'hover:border-primary/50'
          )}
          onClick={() => onSelect(vehicle)}
        >
          <img
            src={vehicle.image}
            alt={vehicle.type}
            className="w-full h-32 object-contain mb-4"
          />
          <div className="space-y-2">
            <h3 className="font-semibold">{vehicle.type}</h3>
            <p className="text-sm text-muted-foreground">
              Base Price: ₹{vehicle.basePrice}
            </p>
            <p className="text-sm text-muted-foreground">
              ₹{vehicle.pricePerKm}/km
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}