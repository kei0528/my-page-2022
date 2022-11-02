'use client';

import s from './GlobalMenu.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalMenuIsShown } from '../../../store/reducers/ui.reducer';
import { AppState } from '../../../store';

export const GlobalMenu = ({ className }: { className: string }) => {
  const isShown = useSelector<AppState>(state => state.ui.globalMenu.isShown);
  const dispatch = useDispatch();
  return (
    <>
      <nav className={`fixed z-40 rounded-lg border-2 border-black bg-dark-purple p-2 duration-100 portrait:top-10 portrait:right-6 landscape:top-16 landscape:right-24 ${isShown ? s.shown : s.hidden} ${className}`}>
        <ul className='flex flex-col gap-5 rounded-lg border-2 border-army-green bg-white px-5 py-8'>
          <li>
            <Link className={s.nav} href='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <button className={s.nav}>Keisuke</button>
          </li>
          <li>
            <Link className={s.nav} href='/contact'>
              Kontakt
            </Link>
          </li>
          <li>
            <button className={s.nav}>Einstellung</button>
          </li>
          <li>
            <button className={s.nav} onClick={() => dispatch(toggleGlobalMenuIsShown())}>
              Schliessen
            </button>
          </li>
        </ul>
      </nav>
      <div className={isShown ? 'fixed top-0 left-0 z-30 h-screen w-screen bg-trans-grey' : ''} onClick={() => dispatch(toggleGlobalMenuIsShown())} />
    </>
  );
};
