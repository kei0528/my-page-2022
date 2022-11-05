import s from './Header.module.scss';

export const Header = ({ headline, intro }: { headline: string; intro: string }) => {
  return (
    <header className={s.header}>
      <div className='mx-auto flex h-full max-w-page flex-col items-center justify-center pt-[100px] pb-[120px]'>
        <p className='mb-1 text-2xl font-bold tracking-wider'>{intro}</p>
        <h1 className={`md:text-144px translate-x-1 pb-6 text-center font-game text-[124px] leading-[48px] tracking-widest text-gb-purple ${s.text_shadow}`}>{headline}</h1>
      </div>
    </header>
  );
};
