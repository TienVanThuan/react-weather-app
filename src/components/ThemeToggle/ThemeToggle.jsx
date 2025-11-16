import React, { useEffect } from 'react';
import { useTheme } from '@/store/useTheme';

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}
