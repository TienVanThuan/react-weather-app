import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const LocationHeader = () => {
  return (
    <div className="flex items-center">
      <FaLocationDot />
      <span className="mx-1 text-lg">Ho Chi Minh City</span>
    </div>
  );
};

export default LocationHeader;
