import NextLink from 'next/link';
import { ReactElement } from 'react';
import { BaseMainLayout } from '../../components/uis/BaseMainLayout';

const LinkWrapper = ({ children }: { children: ReactElement }) => {
  return <ul className='flex flex-col gap-2 md:flex-row md:gap-6'>{children}</ul>;
};

const Link = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <NextLink className='text-black hover:underline md:text-lg' href={href}>
        {label}
      </NextLink>
    </li>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className='mx-5 sm:mx-8'>
        <div className='mx-auto flex max-w-page justify-between border-t border-lighter-grey px-2 pt-8 sm:p-8 sm:pt-12'>
          <div className='flex flex-col gap-14 md:gap-7'>
            <LinkWrapper>
              <>
                <Link href='/' label='Home' />
                <Link href='/v1/me' label='Me' />
                <Link href='/v1/blog' label='Blog' />
                <Link href='/v1/contact' label='Contact' />
              </>
            </LinkWrapper>
            <LinkWrapper>
              <>
                <a className='block text-black hover:underline md:text-lg' href='https://github.com/kei0528'>
                  Github
                </a>
                <a className='block text-black hover:underline md:text-lg' href='https://www.linkedin.com/in/keisuke-tanaka-5546a2198/'>
                  Linkedin
                </a>
              </>
            </LinkWrapper>
          </div>
          <small className='h-fit text-sm writing-mode-vertical md:text-base md:writing-mode-horizontal'>&copy;Keisuke Tanaka {new Date().getFullYear()}</small>
        </div>
      </footer>
    </>
  );
}
