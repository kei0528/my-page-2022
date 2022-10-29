import '../styles/globals.scss';
import { SideNav } from '../components/ui/SideNav';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head>
        <title>Dev Kei lv.5</title>
      </Head>
      <body>
        <SideNav />
        <div className='min-h-screen portrait:pb-[60px] landscape:pr-[52px]'>{children}</div>
      </body>
    </html>
  );
}
