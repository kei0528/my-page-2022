import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>(state => state.setting) as SettingType;
  const gameBgm = useRef(new Audio('/assets/sounds/home.mp3'));
  const clickSound = useRef(new Audio('/assets/sounds/click.wav'));
  const hoverSound = useRef(new Audio('/assets/sounds/hover.wav'));
  const menuToggleSound = useRef(new Audio('/assets/sounds/menu-open.mp3'));

  const playGameBgm = useCallback(() => {
    if (soundsOn) {
      console.log('exe');
      gameBgm.current.loop = true;
      gameBgm.current.volume = 0.3;
      gameBgm.current.play();
    }
  }, [soundsOn]);

  const stopGameBgm = () => {
    gameBgm.current.pause();
  };

  const playClickSound = useCallback(() => {
    if (soundsOn) {
      clickSound.current.play();
    }
  }, [soundsOn]);

  const playHoverSound = useCallback(() => {
    if (soundsOn) {
      hoverSound.current.play();
    }
  }, [soundsOn]);

  const playMenuToggleSound = useCallback(() => {
    if (soundsOn) {
      menuToggleSound.current.play();
    }
  }, [soundsOn]);

  return {
    playGameBgm,
    stopGameBgm,
    playClickSound,
    playHoverSound,
    playMenuToggleSound
  };
};
