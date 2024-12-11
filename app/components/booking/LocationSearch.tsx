'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LocationSearchProps {
  onLocationSelect: (location: { address: string; lat: number; lng: number }) => void;
  placeholder: string;
}

export function LocationSearch({ onLocationSelect, placeholder }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    // TODO: Integrate with Maps API for actual geocoding
    // For now, using mock data
    onLocationSelect({
      address: searchQuery,
      lat: 0,
      lng: 0
    });
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
      />
      <Button onClick={handleSearch} variant="secondary">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}