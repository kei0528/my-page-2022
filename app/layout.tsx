'use client';
import 'modern-css-reset';
import '../styles/globals.scss';
import '../styles/generics.scss';
import { SideNav } from '../components/triggers/SideNav';
import { GlobalMenu } from '../components/triggers/GlobalMenu';
import { Provider } from '../components/triggers/Provider';
import { isDarkmode } from '../statics/conditions';
import { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html')!.classList.add('dark');
    }
  }, []);
  return (
    <html data-lt-installed={true} className={isDarkmode ? 'dark' : ''}>
      <head>
        <title>Dev Kei lv.5</title>
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="min-h-screen portrait:pb-[60px] landscape:pr-[60px]">
        <Provider>
          <SideNav />
          <GlobalMenu />
          {children}
        </Provider>
      </body>
    </html>
  );
}
