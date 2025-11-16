import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Home from '@/pages/Home';

export default function App() {
  return (
    <div className="min-h-screen text-slate-600">
      <Navbar />
      <Home />
    </div>
  );
}
