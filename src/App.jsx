import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Home from '@/pages/Home';

export default function App() {
  return (
    <div className="min-h-screen w-full relative bg-white text-slate-600 font-sans">
      {/* Cool Blue Glow Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#ffffff',
          backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: 'blur(80px)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Navbar />
      <Home />
    </div>
  );
}
