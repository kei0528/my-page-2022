import Image from 'next/image';
import s from './Header.module.scss';

export const Header = ({
  headline,
  intro,
  className,
  bgImg,
}: {
  headline?: string;
  intro?: string;
  className?: string;
  bgImg?: string;
}) => {
  return (
    <header className={`${s.header} ${bgImg ? s.stripe_with_bg : s.stripe} ${className ?? ''}`}>
      {bgImg && <Image className="-z-10 object-cover" src={bgImg} alt="" fill />}
      <div className="mx-auto flex h-full max-w-page flex-col items-center justify-center pt-[100px] pb-[120px]">
        {!!headline && <p className="mb-1 text-2xl font-bold tracking-wider text-black dark:text-white">{intro}</p>}
        {!!headline && (
          <h1
            className={`md:text-144px translate-x-1 pb-6 text-center font-game text-[124px] leading-[48px] tracking-wider text-gb-purple dark:text-light-text-purple ${s.text_shadow}`}
          >
            {headline}
          </h1>
        )}
      </div>
    </header>
  );
};
