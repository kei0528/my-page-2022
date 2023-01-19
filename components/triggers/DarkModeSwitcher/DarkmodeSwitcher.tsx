'use client';

import { useEffect } from 'react';

export const DarkModeSwitcher = () => {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html')!.classList.add('dark');
    }
  });

  return <></>;
};
