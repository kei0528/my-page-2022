'use client';

import s from './Home.module.scss';
import { useCompState } from './Home.state';

export const Home = () => {
  const {} = useCompState();

  return (
    <main className='flex items-center justify-center bg-black portrait:h-[calc(100vh-60px)] landscape:h-screen'>
      <div className={`${s.gb} mx-5 h-[80vh] max-h-[620px] w-full max-w-3xl overflow-hidden rounded-md`}></div>
    </main>
  );
};
