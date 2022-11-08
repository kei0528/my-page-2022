'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { SettingType } from '../../../store/reducers/setting.reducer';
import { FirstLoadView } from '../../triggers/FirstLoadView';
import { GamePlayOptions } from '../../triggers/GamePlayOptions';
import { GameLifeGauge } from '../../uis/GameLifeGauge';
import { GameMessageBox } from '../../uis/GameMessageBox';
import s from './Home.module.scss';
import { useCompState } from './Home.state';

const Home = () => {
  const mainRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const userSetting = useSelector<AppState>(state => state.setting) as SettingType;
  const { plot, currPlot } = useCompState({ messageRef, mainRef });

  if (!userSetting.userSetted) {
    return <FirstLoadView />;
  } else {
    return (
      <>
        <main ref={mainRef} className='flex items-center justify-center bg-black portrait:h-[calc(100vh-60px)] landscape:h-screen'>
          <div className={`${s.gb} mx-5 h-[80vh] max-h-[620px] w-full max-w-3xl overflow-hidden rounded-md`}>
            <div className={s.wrapper}>
              <GameLifeGauge className={s.life_gauge} lifeMax={100} lifeCurr={100} />
              <div className={s.image_wrapper}>
                <Image src='/assets/images/Image_Keisuke-game.svg' fill className={s.img} alt='' />
              </div>
              {!plot.current[currPlot].options ? <GameMessageBox className={s.message_box} messageRef={messageRef} message={currPlot !== null ? plot.current[currPlot].message : ''} readmore={true} /> : <GamePlayOptions className={s.message_box} message={plot.current[currPlot].message} options={plot.current[currPlot].options} />}
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Home;
