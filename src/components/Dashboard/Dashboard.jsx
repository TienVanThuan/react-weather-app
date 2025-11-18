import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const Dashboard = () => {
  return (
    <MainLayout>
      <CurrentWeather />
    </MainLayout>
  );
};

export default Dashboard;
