import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSoundOption, setUserSetted } from '../../../store/reducers/setting.reducer';
import s from './FirstLoadView.module.scss';
import { GameMessage } from '../../uis/GameMessage';

const Btn = ({ label, option }: { label: string; option: boolean }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${s.btn} font-game text-game-md leading-game-md text-white`}
      onClick={() => {
        dispatch(setSoundOption(option));
        dispatch(setUserSetted(true));
      }}
    >
      {label}
    </button>
  );
};

export const FirstLoadView = React.memo(() => {
  const message = useRef('Do you want turn on the sound?');

  return (
    <main className="bg-black p-5 sm:p-8 portrait:h-realMaxVh landscape:h-realMaxVh">
      <h1 className="hidden">
        Hej! I&apos;m Keisuke - a frontend developer, coffee enthusiast and father of two energetic sons!
      </h1>
      <div className="mx-auto mt-[10vh] max-w-page">
        <div>
          <GameMessage message={message.current} />
        </div>
        <ul
          style={{ animationDelay: `${message.current.length / 15 + 1}s` }}
          className="message-anime mt-10 flex w-fit flex-col gap-4 border border-b-4 border-r-4 border-white py-8 px-12"
        >
          <li>
            <Btn label="Yes" option={true} />
          </li>
          <li>
            <Btn label="No" option={false} />
          </li>
        </ul>
      </div>
    </main>
  );
});

FirstLoadView.displayName = 'FirstLoadView';
