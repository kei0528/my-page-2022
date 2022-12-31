import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { SettingType } from '../store/reducers/setting.reducer';

export const useSound = () => {
  const { soundsOn } = useSelector<AppState>((state) => state.setting) as SettingType;
  const gameBgm = useMemo(() => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/home.mp3') : undefined), []);
  const clickSound = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/click.mp3') : undefined),
    []
  );
  const hoverSound = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/hover.mp3') : undefined),
    []
  );
  const menuToggleSound = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/menu-open.mp3') : undefined),
    []
  );
  const attackSound = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/attack.mp3') : undefined),
    []
  );
  const faintedSound = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/fainted.mp3') : undefined),
    []
  );
  const gameOverBgm = useMemo(
    () => (typeof Audio !== 'undefined' ? new Audio('/assets/sounds/gameover.mp3') : undefined),
    []
  );

  const playGameBgm = useCallback(() => {
    if (soundsOn) {
      if (typeof gameBgm !== 'undefined') {
        gameBgm.loop = true;
        gameBgm.volume = 0.3;
        gameBgm.play();
        return gameBgm;
      }
    }
    return () => gameBgm?.pause();
  }, [soundsOn, gameBgm]);

  const stopGameBgm = () => {
    gameBgm?.pause();
    return gameBgm;
  };

  const playClickSound = useCallback(() => {
    if (soundsOn) {
      clickSound?.play();
      return clickSound;
    }
    return () => clickSound?.pause();
  }, [soundsOn, clickSound]);

  const playHoverSound = useCallback(() => {
    if (soundsOn) {
      hoverSound?.play();
      return hoverSound;
    }
    return () => hoverSound?.pause();
  }, [soundsOn, hoverSound]);

  const playMenuToggleSound = useCallback(() => {
    if (soundsOn) {
      menuToggleSound?.play();
      return menuToggleSound;
    }
    return () => menuToggleSound?.pause();
  }, [soundsOn, menuToggleSound]);

  const playFaintedSound = useCallback(() => {
    if (soundsOn) {
      faintedSound?.play();
      return faintedSound;
    }
    return () => faintedSound?.pause();
  }, [soundsOn, faintedSound]);

  const playAttackSound = useCallback(() => {
    if (soundsOn) {
      if (typeof attackSound !== 'undefined') {
        attackSound.volume = 0.5;
        attackSound.play();
        return attackSound;
      }
    }
    return () => attackSound?.pause();
  }, [soundsOn, attackSound]);

  const playGameOverBgm = useCallback(() => {
    if (soundsOn) {
      if (typeof gameOverBgm !== 'undefined') {
        gameOverBgm.volume = 0.3;
        gameOverBgm.loop = true;
        gameOverBgm.play();
        return gameOverBgm;
      }
    }
    return () => gameOverBgm?.pause();
  }, [gameOverBgm, soundsOn]);

  const stopGameOverBgm = () => {
    gameOverBgm?.pause();
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
