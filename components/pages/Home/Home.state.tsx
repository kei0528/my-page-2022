import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { AppState } from '../../../store';

export const useCompState = () => {
  const { playGameBgm, stopGameBgm } = useSound();
  const userSetted = useSelector<AppState>(state => state.setting.userSetted);
  const [currPlot, setCurrPlot] = useState<number | null>(null);
  const liveInDESince = useRef(new Date().getFullYear() - 2007);
  const introduction = useRef(['Hej! Ich bin Keisuke, der Frontend Developer aus Japan!', `Ich wohne seit ${liveInDESince.current} Jahren.`, 'Ich liebe Programmieren, Pilze sammeln und Kaffee!']);

  useEffect(() => {
    playGameBgm();

    return () => {
      stopGameBgm();
    };
  }, [playGameBgm, stopGameBgm]);

  const plot = useRef([
    { message: 'Ein wilder Keisuke ist erscheint!', option: null },
    {
      message: '',
      option: [
        { label: 'Ansprechen', handler: '' },
        { label: 'Blog lesen', handler: '' },
        { label: 'Kontaktieren', handler: '' },
        { label: 'Angreifen', handler: '' }
      ]
    }
  ]);

  useEffect(() => {
    if (userSetted) {
      setCurrPlot(0);
    } else {
      setCurrPlot(-1);
    }
  }, []);

  const _setCurrPlot = useCallback(() => {
    if (userSetted && currPlot && currPlot < plot.current.length - 1) {
      // FIX:Condition
      setCurrPlot(state => +1);
    }
  }, [currPlot, userSetted]);

  useEffect(() => {
    window.addEventListener('click', _setCurrPlot);

    return () => window.removeEventListener('click', _setCurrPlot);
  }, [_setCurrPlot]);

  useEffect(() => {
    console.log(currPlot);
  }, [currPlot]);

  return { currPlot, setCurrPlot, plot };
};
