import { ReactElement, ReactNode } from 'react';

export const BaseMainLayout = ({ children, outerClassName, innerClassName }: { children: ReactElement | ReactNode; outerClassName?: string; innerClassName?: string }) => {
  return (
    <main className={`mx-5 sm:mx-8 ${outerClassName ?? ''}`}>
      <div className={`mx-auto max-w-page px-2 ${innerClassName ?? ''}`}>{children}</div>
    </main>
  );
};
