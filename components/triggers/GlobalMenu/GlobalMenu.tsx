'use client';

import s from './GlobalMenu.module.scss';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGlobalMenuIsShown } from '../../../store/reducers/ui.reducer';
import { AppState } from '../../../store';
import { MouseEventHandler } from 'react';
import { SettingType } from '../../../store/reducers/setting.reducer';
import { useSound } from '../../../hooks/useSound';

const Link = ({ href, label }: { href: string; label: string }) => {
  const { playHoverSound, playClickSound } = useSound();
  const dispatch = useDispatch();
  return (
    <NextLink
      className={s.nav}
      href={href}
      onClick={() => {
        dispatch(toggleGlobalMenuIsShown());
        playClickSound();
      }}
      onMouseOver={playHoverSound}
      onFocus={playHoverSound}
    >
      {label}
    </NextLink>
  );
};

const Button = ({ onClick, label }: { onClick?: MouseEventHandler; label: string }) => {
  const { playHoverSound, playClickSound } = useSound();
  const dispatch = useDispatch();
  return (
    <button
      className={s.nav}
      onClick={(e) => {
        dispatch(toggleGlobalMenuIsShown());
        onClick && onClick(e);
        playClickSound();
      }}
      onMouseOver={playHoverSound}
      onFocus={playHoverSound}
    >
      {label}
    </button>
  );
};

export const GlobalMenu = ({ className }: { className?: string }) => {
  const { playMenuToggleSound } = useSound();
  const isShown = useSelector<AppState>((state) => state.ui.globalMenu.isShown);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={`fixed z-40 rounded-lg border-2 border-black bg-dark-purple p-2 duration-100 portrait:top-10 portrait:right-6 landscape:top-16 landscape:right-24 ${
          isShown ? s.shown : s.hidden
        } ${className ?? ''}`}
      >
        <ul className="flex flex-col gap-5 rounded-lg border-2 border-army-green bg-white px-5 py-8">
          <li>
            <Link href="/" label="Home" />
          </li>
          <li>
            <Link href="/v1/blog" label="Blog" />
          </li>
          <li>
            <Link href="/v1/me" label="Keisuke" />
          </li>
          <li>
            <Link href="/v1/contact" label="Kontakt" />
          </li>
          <li>
            <Button label="Schliessen" />
          </li>
        </ul>
      </nav>
      <div
        className={
          isShown
            ? 'fixed top-0 left-0 z-30 w-screen bg-trans-grey portrait:h-realMaxVhWithMenu landscape:h-realMaxVh'
            : ''
        }
        onClick={() => {
          dispatch(toggleGlobalMenuIsShown());
          playMenuToggleSound();
        }}
      />
    </>
  );
};
