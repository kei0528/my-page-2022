import React, { MouseEventHandler, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { sessionStorageServices } from '../../../utils/sessionStorageServices';
import { toggleSoundOption, toggleUserSetted } from '../../../store/reducers/setting.reducer';
import s from './FirstLoadView.module.scss';
import { GameMessage } from '../../uis/GameMessage';

const Btn = ({ label, option }: { label: string; option: boolean }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${s.btn} font-game text-game-md leading-game-md text-white`}
      onClick={() => {
        dispatch(toggleSoundOption(option));
        dispatch(toggleUserSetted(true));
      }}
    >
      {label}
    </button>
  );
};

export const FirstLoadView = React.memo(() => {
  const message = useRef('Do you want turn on the sound?');

  return (
    <div className='h-screen bg-black p-5 sm:p-8'>
      <p>
        <GameMessage message={message.current} />
      </p>
      <ul style={{ animationDelay: `${message.current.length / 15 + 1}s` }} className='message-anime mt-10 flex w-fit flex-col gap-4 border border-b-4 border-r-4 border-white py-8 px-12'>
        <li>
          <Btn label='Yes' option={true} />
        </li>
        <li>
          <Btn label='No' option={false} />
        </li>
      </ul>
    </div>
  );
});

FirstLoadView.displayName = 'FirstLoadView';
