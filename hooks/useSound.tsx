import { useCallback, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>((state) => state.setting) as SettingType;
  const gameBgm = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/home.mp3') : undefined
  );
  const clickSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/click.mp3') : undefined
  );
  const hoverSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/hover.mp3') : undefined
  );
  const menuToggleSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/menu-open.mp3') : undefined
  );
  const attackSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/attack.mp3') : undefined
  );
  const faintedSound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/fainted.mp3') : undefined
  );
  const gameOverBgm = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/assets/sounds/gameover.mp3') : undefined
  );

  const playGameBgm = useCallback(() => {
    if (soundsOn) {
      if (typeof gameBgm.current !== 'undefined') {
        gameBgm.current.loop = true;
        gameBgm.current.volume = 0.3;
        gameBgm.current.play();
        return gameBgm;
      }
    }
  }, [soundsOn, gameBgm]);

  const stopGameBgm = () => {
    gameBgm.current?.pause();
    return gameBgm;
  };

  const playClickSound = useCallback(() => {
    if (soundsOn) {
      clickSound.current?.play();
      return clickSound;
    }
  }, [soundsOn, clickSound]);

  const playHoverSound = useCallback(() => {
    if (soundsOn) {
      hoverSound.current?.play();
      return hoverSound;
    }
  }, [soundsOn, hoverSound]);

  const playMenuToggleSound = useCallback(() => {
    if (soundsOn) {
      menuToggleSound.current?.play();
      return menuToggleSound;
    }
  }, [soundsOn, menuToggleSound]);

  const playFaintedSound = useCallback(() => {
    if (soundsOn) {
      faintedSound.current?.play();
      return faintedSound;
    }
  }, [soundsOn, faintedSound]);

  const playAttackSound = useCallback(() => {
    if (soundsOn) {
      if (typeof attackSound.current !== 'undefined') {
        attackSound.current.volume = 0.5;
        attackSound.current.play();
        return attackSound;
      }
    }
  }, [soundsOn, attackSound]);

  const playGameOverBgm = useCallback(() => {
    if (soundsOn) {
      if (typeof gameOverBgm.current !== 'undefined') {
        gameOverBgm.current.volume = 0.5;
        gameOverBgm.current.play();
        return gameOverBgm;
      }
    }
  }, [gameOverBgm, soundsOn]);

  const stopGameOverBgm = () => {
    gameOverBgm.current?.pause();
    return gameBgm;
  };

  return {
    playGameBgm,
    stopGameBgm,
    playClickSound,
    playHoverSound,
    playMenuToggleSound,
    playAttackSound,
    playFaintedSound,
    playGameOverBgm,
    stopGameOverBgm,
  };
};
