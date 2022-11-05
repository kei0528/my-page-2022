import { ReactElement, ReactNode } from 'react';

export const BaseMainLayout = ({ children }: { children: ReactElement | ReactNode }) => {
  return (
    <main className='mx-5 sm:mx-8'>
      <div className='mx-auto max-w-page px-2'>{children}</div>
    </main>
  );
};
