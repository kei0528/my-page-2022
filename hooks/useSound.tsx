import { useCallback, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>(state => state.setting) as SettingType;
  const gameBgm = useMemo(() => new Audio('/assets/sounds/home.mp3'), []);
  const clickSound = useMemo(() => new Audio('/assets/sounds/click.wav'), []);
  const hoverSound = useMemo(() => new Audio('/assets/sounds/hover.wav'), []);
  const menuToggleSound = useMemo(() => new Audio('/assets/sounds/menu-open.mp3'), []);

  const playGameBgm = useCallback(() => {
    if (soundsOn) {
      console.log('exe');
      gameBgm.loop = true;
      gameBgm.volume = 0.3;
      gameBgm.play();
    }
  }, [soundsOn, gameBgm]);

  const stopGameBgm = () => {
    gameBgm.pause();
  };

  const playClickSound = useCallback(() => {
    if (soundsOn) {
      clickSound.play();
    }
  }, [soundsOn, clickSound]);

  const playHoverSound = useCallback(() => {
    if (soundsOn) {
      hoverSound.play();
    }
  }, [soundsOn, hoverSound]);

  const playMenuToggleSound = useCallback(() => {
    if (soundsOn) {
      menuToggleSound.play();
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
