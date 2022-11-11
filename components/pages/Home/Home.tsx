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
  const imageRef = useRef<HTMLDivElement>(null);
  const userSetting = useSelector<AppState>((state) => state.setting) as SettingType;
  const { plot, currPlot, lifeGauge } = useCompState({
    messageRef,
    mainRef,
    imageRef,
  });

  if (!userSetting.userSetted) {
    return <FirstLoadView />;
  } else {
    return (
      <>
        <main
          ref={mainRef}
          className="flex items-center justify-center bg-black portrait:h-[calc(100vh-60px)] landscape:h-screen"
        >
          <div className={`${s.gb} mx-5 h-[80vh] max-h-[480px] w-full max-w-3xl overflow-hidden rounded-md`}>
            <div className={s.wrapper}>
              <GameLifeGauge className={s.life_gauge} lifeMax={lifeGauge.max} lifeCurr={lifeGauge.curr} />
              <div className={s.image_wrapper} ref={imageRef}>
                <Image src="/assets/images/Image_Keisuke-game.webp" fill className={s.img} alt="" />
              </div>
              {!plot[currPlot].options ? (
                <GameMessageBox
                  className={s.message_box}
                  messageRef={messageRef}
                  message={currPlot !== null ? plot[currPlot].message : ''}
                  readmore={true}
                />
              ) : (
                <GamePlayOptions
                  className={s.message_box}
                  message={plot[currPlot].message}
                  options={plot[currPlot].options}
                  returnToOption={plot[currPlot].returnToOption}
                />
              )}
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Home;
