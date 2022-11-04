'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { SettingType } from '../../../store/reducers/setting.reducer';
import { FirstLoadView } from '../../triggers/FirstLoadView';
import { GameLifeGauge } from '../../uis/GameLifeGauge';
import { GameMessageBox } from '../../uis/GameMessageBox';
import s from './Home.module.scss';
import { useCompState } from './Home.state';

export const Home = () => {
  const userSetting = useSelector<AppState>(state => state.setting) as SettingType;
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current !== null) audioRef.current.volume = 0.2;
  });

  if (!userSetting.userSetted) {
    return <FirstLoadView />;
  } else {
    return (
      <>
        <main className='flex items-center justify-center bg-black portrait:h-[calc(100vh-60px)] landscape:h-screen'>
          <div className={`${s.gb} mx-5 h-[80vh] max-h-[620px] w-full max-w-3xl overflow-hidden rounded-md`}>
            <div className={s.wrapper}>
              <GameLifeGauge className={s.life_gauge} lifeMax={100} lifeCurr={100} />
              <div className={s.image_wrapper}>
                <Image src='/assets/images/Image_Keisuke-game.svg' fill className={s.img} alt='' />
              </div>
              <GameMessageBox className={s.message_box} message='Test' readmore={true} />
            </div>
          </div>
        </main>
        <audio className='hidden' controls autoPlay={userSetting.soundsOn} ref={audioRef} loop>
          <source src='/assets/sounds/home.mp3' type='audio/mpeg' />
        </audio>
      </>
    );
  }
};
