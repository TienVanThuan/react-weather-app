import React from 'react';
import { WindyStrong, Humidity } from '../Icon/Icon';

const CurrentWeather = () => {
  return (
    <div className="text-center relative">
      <div className="relative w-80 m-auto">
        <p className="text-9xl">26°</p>
        <div className="absolute -right-1 top-14 min-w-fit text-left">
          <p className="flex items-center">
            <WindyStrong width="1rem" height="1rem" color="rgb(71, 85, 105)" />
            <span className="ml-1 text-1xl">6.1 mph</span>
          </p>
          <p className="flex items-center">
            <Humidity width="1rem" height="1rem" color="rgb(71, 85, 105)" />
            <span className="ml-1 text-1xl">90%</span>
          </p>
        </div>
      </div>
      <p className="text-4xl font-medium mr-8">Cloudy</p>
    </div>
  );
};

export default CurrentWeather;
