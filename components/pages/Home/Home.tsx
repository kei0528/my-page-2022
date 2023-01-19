'use client';
import s from './Home.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Particles from 'react-particles';
import { AppState } from '../../../store';
import { SettingType } from '../../../store/reducers/setting.reducer';
import { FirstLoadView } from '../../triggers/FirstLoadView';
import { GamePlayOptions } from '../../triggers/GamePlayOptions';
import { GameLifeGauge } from '../../uis/GameLifeGauge';
import { GameMessageBox } from '../../uis/GameMessageBox';
import { useCompState } from './Home.state';
import { particles } from './particles';

const Home = () => {
  const mainRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const gbRef = useRef<HTMLDivElement>(null);
  const { userSetted } = useSelector<AppState>((state) => state.setting) as SettingType;
  const { plot, currPlot, lifeGauge, keisukeStatus, particlesInit } = useCompState({
    messageRef,
    mainRef,
    gbRef,
  });

  const keisukeStatusClassNames = {
    ATTACKED: s.attacked,
    FAINTED: s.fainted,
  };

  if (!userSetted) {
    return <FirstLoadView />;
  } else {
    return (
      <>
        <main
          id="particle-bg"
          ref={mainRef}
          className="flex items-center justify-center bg-black portrait:h-[calc(100dvh-60px)] landscape:h-realMaxVh"
        >
          <Particles id="particles-bg" init={particlesInit} options={particles} />
          <div
            className={`${s.gb} ${
              keisukeStatus !== null && keisukeStatusClassNames[keisukeStatus]
            } mx-5 h-[80vh] max-h-[480px] w-full max-w-3xl overflow-hidden rounded-md`}
            ref={gbRef}
          >
            <div className={s.wrapper}>
              <GameLifeGauge
                className={`${s.life_gauge} ${keisukeStatus !== null && keisukeStatusClassNames[keisukeStatus]}`}
                lifeMax={lifeGauge.max}
                lifeCurr={lifeGauge.curr}
              />
              <div className={s.image_wrapper}>
                <Image
                  src="/assets/images/Avatar_Kei02.webp"
                  fill
                  className={`${s.img} ${keisukeStatus !== null && keisukeStatusClassNames[keisukeStatus]}`}
                  alt=""
                />
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
