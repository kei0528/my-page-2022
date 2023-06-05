'use client';

import { useEffect } from 'react';

export const DarkModeSwitcher = () => {
  useEffect(() => {
    console.log('toggled!');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html')!.classList.add('dark');
    }
  }, []);

  return <></>;
};
