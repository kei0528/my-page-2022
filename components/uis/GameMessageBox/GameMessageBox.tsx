import { v4 as uuid } from 'uuid';
import s from './GameMessageBox.module.scss';

export const GameMessageBox = ({ message, readmore }: { message: string; readmore: boolean }) => {
  return (
    <div className='relative bg-dark-purple p-2'>
      <p className='h-36  rounded-md border-x-[16px] border-y-8 border-red bg-turkey px-4 py-6'>
        {message.split('').map((string, index) => {
          return (
            <span className={`${s.messageAnime} font-game text-game-md leading-game-md text-white`} style={{ animationDelay: `${index * 0.05}s` }} key={uuid()}>
              {string}
            </span>
          );
        })}
      </p>
      {readmore && <div className='absolute bottom-7 right-10 animate-bounce border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-white' />}
    </div>
  );
};
