'use client';
import 'modern-css-reset';
import '../styles/globals.scss';
import '../styles/generics.scss';
import localfont from '@next/font/local';
import { SideNav } from '../components/triggers/SideNav';
import { GlobalMenu } from '../components/triggers/GlobalMenu';
import { Provider } from '../components/triggers/Provider';
import { isDarkmode } from '../statics/conditions';
import { useEffect } from 'react';
import { Analytics } from '../components/triggers/Analytics';

const outfit = localfont({
  src: [
    {
      path: './fonts/outfit-v6/outfit-v6-latin-regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/outfit-v6/outfit-v6-latin-700.ttf',
      weight: 'bold',
    },
  ],
  variable: '--outfit-v6',
});

const gameFont = localfont({
  src: './fonts/32bit/32bit.ttf',
  weight: '400',
  variable: '--32bit',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html')!.classList.add('dark');
    }
  }, []);

  return (
    <html
      lang="en"
      data-lt-installed={true}
      className={`${isDarkmode ? 'dark' : ''} ${outfit.variable}  ${gameFont.variable}`}
    >
      <head>
        <title>Dev Kei lv.5</title>
        <meta name="google-site-verification" content="FGbJ7wlLJHYba9nxMm9lt9zVipFsIjtPWLW5Ic21kcU" />
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm Keisuke. A frontend developer, coffee enthusiast and father of two energetic sons!"
        />
        <meta name="keyword" content="Web,Frontend Developer,Entwickler,Keisuke Tanaka" />
        <meta property="og:title" content="Dev Kei lv.5" />
        <meta
          property="og:description"
          content="I'm Keisuke. A frontend developer, coffee enthusiast and father of two energetic sons!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/Image_Keisuke-game.webp" />
        <meta property="og:site_name" content="Dev Kei lv.5" />
        <meta property="og:locale" content="en" />
      </head>
      <body className="portrait:min-h-realMaxVh portrait:pb-[60px] landscape:min-h-realMaxVh landscape:pr-[52px]">
        <Provider>
          <SideNav />
          <GlobalMenu />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
