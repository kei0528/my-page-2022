import s from './Home.module.scss';

export const Home = () => {
  return (
    <main className='flex items-center justify-center bg-black portrait:h-[calc(100vh-60px)] landscape:h-screen'>
      <div className={s.gb}></div>
    </main>
  );
};
