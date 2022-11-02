'use client';

import s from './GameBooleanBox.module.scss';
import { MouseEvent } from 'react';

type GameBooleanBoxProps = {
  trueText?: string;
  falseText?: string;
  onClick?: (res: boolean, e: MouseEvent) => void;
  className?: string;
};

export const GameBooleanBox = ({ trueText = 'Ja', falseText = 'Nein', onClick, className }: GameBooleanBoxProps) => {
  return (
    <nav className={`w-fit rounded-lg border-2 border-black bg-dark-purple ${className ?? ''}`}>
      <div className='flex flex-col gap-5 rounded-lg border-2 border-army-green bg-white px-4 py-3'>
        <button className={s.btn} onClick={e => onClick && onClick(true, e)}>
          {trueText}
        </button>
        <button className={s.btn} onClick={e => onClick && onClick(true, e)}>
          {falseText}
        </button>
      </div>
    </nav>
  );
};
