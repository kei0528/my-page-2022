import { useCallback, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>(state => state.setting) as SettingType;
  const gameBgm = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio('/assets/sounds/home.mp3') : undefined);
  const clickSound = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio('/assets/sounds/click.wav') : undefined);
  const hoverSound = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio('/assets/sounds/hover.wav') : undefined);
  const menuToggleSound = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio('/assets/sounds/menu-open.mp3') : undefined);

  const playGameBgm = useCallback(() => {
    if (!!soundsOn) {
      if (typeof gameBgm.current !== 'undefined') {
        gameBgm.current.loop = true;
        gameBgm.current.volume = 0.3;
      }

      gameBgm.current?.play();
    }
  }, [soundsOn, gameBgm]);

  const stopGameBgm = () => {
    gameBgm.current?.pause();
  };

  const playClickSound = useCallback(() => {
    if (soundsOn) {
      clickSound.current?.play();
    }
  }, [soundsOn, clickSound]);

  const playHoverSound = useCallback(() => {
    if (soundsOn) {
      hoverSound.current?.play();
    }
  }, [soundsOn, hoverSound]);

  const playMenuToggleSound = useCallback(() => {
    if (soundsOn) {
      menuToggleSound.current?.play();
    }
  }, [soundsOn, menuToggleSound]);

  return {
    playGameBgm,
    stopGameBgm,
    playClickSound,
    playHoverSound,
    playMenuToggleSound
  };
};
