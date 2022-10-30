'use client';

import { MouseEvent } from 'react';
import { v4 as uuid } from 'uuid';

type GamePlayOptionsProp = { options: string[]; onClick?: (e: MouseEvent, index: number) => void };

export const GamePlayOptions = ({ options, onClick }: GamePlayOptionsProp) => {
  if (options.length > 4) throw Error('"options" param\'s length must be less than 4');
  return (
    <div className='flex bg-dark-purple'>
      {/* Message */}
      <div className='flex-1 bg-dark-purple py-2 pl-2'>
        <p className='h-36 rounded-l-md border-y-8 border-l-[16px] border-red bg-turkey px-4 py-6 font-game text-game-md leading-game-md'>Was möchtest du tun?</p>
      </div>
      {/* Options */}
      <nav className='flex-1 rounded-md bg-black p-2'>
        <ul className='grid h-full grid-cols-2 rounded-md border-8 border-dark-purple bg-white'>
          {options.map((option, index) => (
            <li className='pl-4 pr-2 pt-2 pb-4' key={uuid()}>
              <button className='relative max-h-10 max-w-full hover:after:absolute hover:after:-left-4 hover:after:top-2 hover:after:h-3 hover:after:w-3 hover:after:animate-bounce hover:after:bg-triangle-right hover:after:bg-contain hover:after:bg-center hover:after:bg-no-repeat hover:after:content-[""]' onClick={e => onClick && onClick(e, index)}>
                <span className='max-h-10 max-w-full break-all text-left font-game text-game-md leading-5 line-clamp-2'>{option}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
