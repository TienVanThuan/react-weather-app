import React from 'react';
import Button from '@/components/Button/Button.jsx';

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">Welcome</h2>
      <p className="mb-6">This is a starter template with Tailwind + SCSS + Zustand.</p>
      <Button>Primary action</Button>
    </section>
  );
}
