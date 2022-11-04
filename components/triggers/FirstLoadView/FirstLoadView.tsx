import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { toggleSoundOption, toggleUserSetted } from '../../../store/reducers/setting.reducer';
import s from './FirstLoadView.module.scss';
import { MouseEventHandler, useRef } from 'react';

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

export const FirstLoadView = () => {
  const message = useRef('Do you want turn on the sound?');

  return (
    <div className='h-screen bg-black p-5 sm:p-8'>
      <p>
        {message.current.split('').map((string, index) => (
          <span className={`${s.message_anime} font-game text-game-md leading-game-md text-white`} style={{ animationDelay: `${index * 0.05 + 1}s` }} key={uuid()}>
            {string}
          </span>
        ))}
      </p>
      <ul style={{ animationDelay: `${message.current.length / 15 + 1}s` }} className={`${s.nav} mt-10 flex w-fit flex-col gap-4 border border-b-4 border-r-4 border-white py-8 px-12`}>
        <li>
          <Btn label='Yes' option={true} />
        </li>
        <li>
          <Btn label='No' option={false} />
        </li>
      </ul>
    </div>
  );
};
