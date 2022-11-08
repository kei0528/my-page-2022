import 'modern-css-reset';
import '../styles/globals.scss';
import '../styles/generics.scss';
import { SideNav } from '../components/triggers/SideNav';
import { GlobalMenu } from '../components/triggers/GlobalMenu';
import { Provider } from '../components/triggers/Provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-lt-installed={true}>
      <head>
        <title>Dev Kei lv.5</title>
        <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <body className='min-h-screen portrait:pb-[60px] landscape:pr-[60px]'>
        <Provider>
          <SideNav />
          <GlobalMenu />
          {children}
        </Provider>
      </body>
    </html>
  );
}
