import 'modern-css-reset';
import '../styles/globals.scss';
import { SideNav } from '../components/triggers/SideNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Dev Kei lv.5</title>
        <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <body className='min-h-screen portrait:pb-[60px] landscape:pr-[60px]'>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
