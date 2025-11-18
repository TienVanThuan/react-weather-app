import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const LocationHeader = () => {
  return (
    <div className="relative flex items-center justify-center text-slate-900">
      <p className="text-lg flex items-center">
        <FaLocationDot />
        <span className="mx-1">Ho Chi Minh City</span>
      </p>
      <p className="ml-5">Sunday | Dec 12 2023</p>
    </div>
  );
};

export default LocationHeader;
