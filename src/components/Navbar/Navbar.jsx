import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import LocationHeader from '../LocationHeader/LocationHeader';

export default function Navbar() {
  return (
    <header className="relative flex items-center justify-between w-full px-20 py-4 border-b border-gray-200">
      <LocationHeader />
      <SearchInput />
    </header>
  );
}
