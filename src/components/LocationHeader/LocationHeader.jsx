import React from 'react';
import { Location } from '../Icons/Icons';

const LocationHeader = () => {
  return (
    <div className="relative flex items-center justify-center text-slate-900">
      <p className="text-lg flex items-center">
        <Location width="1.5rem" height="1.5rem" color="rgb(71, 85, 105)" />
        <span className="mx-1">Ho Chi Minh City</span>
      </p>
      <p className="ml-5">Sunday | Dec 12 2023</p>
    </div>
  );
};
export default LocationHeader;
