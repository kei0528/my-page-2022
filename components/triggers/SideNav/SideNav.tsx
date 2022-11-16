'use client';
import s from './SideNav.module.scss';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { toggleGlobalMenuIsShown } from '../../../store/reducers/ui.reducer';

export const SideNav = () => {
  const { playMenuToggleSound } = useSound();
  const dispatch = useDispatch();

  return (
    <nav className="fixed bottom-0 z-50 flex w-screen justify-between bg-gb-purple px-2 py-3 landscape:right-0 landscape:h-realMaxVh landscape:w-fit landscape:flex-col-reverse landscape:py-5 ">
      <div className="flex gap-4 landscape:flex-col">
        <a className={s.btn_wrapper} href="https://github.com/kei0528" target="_blank" rel="noreferrer">
          <div className={s.btn}></div>
          <Image
            className="landscape:rotate-90 "
            alt="Github"
            src="/assets/icons/Icon_Github.svg"
            priority
            width={20}
            height={20}
          />
        </a>
        <button className={s.btn_wrapper} onClick={() => document.querySelector('html')?.classList.toggle('dark')}>
          <div className={s.btn}></div>
          <Image src="/assets/icons/Icon_Moon.svg" alt="Toggle darkmode" width={20} height={20} />
        </button>
      </div>
      <div className="relative flex h-fit items-center gap-2 rounded-full bg-light-gb-purple px-3 py-2 leading-3 shadow-btn-inner landscape:flex-col landscape:pr-1 landscape:pl-2">
        <label
          className="cursor-pointer font-bold text-light-beige drop-shadow-md landscape:writing-mode-vertical"
          htmlFor="g-menu"
        >
          Menu
        </label>
        <button
          className="-mb-1 block h-6 w-6 rounded-full bg-lightest-grey shadow-btn shadow-lighter-gb-purple landscape:shadow-btn-vertical landscape:shadow-lighter-gb-purple"
          id="g-menu"
          aria-label="Menu"
          onClick={() => {
            dispatch(toggleGlobalMenuIsShown());
            playMenuToggleSound();
          }}
        ></button>
      </div>
    </nav>
  );
};
