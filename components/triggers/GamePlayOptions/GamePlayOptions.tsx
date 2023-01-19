'use client';

import { useSound } from '../../../hooks/useSound';
import { PlotType } from '../../pages/Home/Home.state';
import { GameMessage } from '../../uis/GameMessage';

export type GamePlayOptionsProp = PlotType & { className?: string };

export const GamePlayOptions = ({ options, message, className }: GamePlayOptionsProp) => {
  if (!options) throw Error('Options are required');
  if (options.length > 4) throw Error('"options" param\'s length must be less than 4');
  const { playHoverSound, playClickSound } = useSound();

  return (
    <div className={`flex bg-dark-purple ${className ?? ''}`}>
      {/* Message */}
      <div className="flex-1 bg-dark-purple py-2 pl-2">
        <p className="h-36 rounded-l-md border-y-8 border-l-[16px] border-red bg-turkey px-4 py-6 font-game text-game-md leading-game-md text-white">
          <GameMessage message={message} />
        </p>
      </div>
      {/* Options */}
      <nav className="flex-1 rounded-md bg-black p-2">
        <ul className="grid h-full grid-cols-2 rounded-md border-8 border-dark-purple bg-white">
          {options.map((option, index) => (
            <li className="pl-4 pr-2 pt-2 pb-4" key={option.label + index}>
              <button
                className='relative max-h-10 max-w-full hover:after:absolute hover:after:-left-4 hover:after:top-2 hover:after:h-3 hover:after:w-3 hover:after:animate-bounce hover:after:bg-triangle-right hover:after:bg-contain hover:after:bg-center hover:after:bg-no-repeat hover:after:content-[""]'
                onClick={() => {
                  option.handler();
                  playClickSound();
                }}
                onMouseOver={playHoverSound}
              >
                <span className="max-h-10 max-w-full break-all text-left font-game text-3xl leading-5 text-black line-clamp-2 md:text-game-md">
                  {option.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
