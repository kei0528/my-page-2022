import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { AppState } from '../../../store';

export const useCompState = ({ messageRef }: { messageRef: RefObject<HTMLParagraphElement> }) => {
  const { playGameBgm, stopGameBgm } = useSound();
  const userSetted = useSelector<AppState>(state => state.setting.userSetted);
  const [currPlot, setCurrPlot] = useState<number | null>(null);
  const [messageRendered, setMessageRendered] = useState(false);
  const liveInDESince = useRef(new Date().getFullYear() - 2007);
  const plot = useRef([
    { message: 'Ein wilder Keisuke erscheint!', option: null },
    {
      message: 'Was möchtest du tun?',
      option: [
        { label: 'Ansprechen', handler: '' },
        { label: 'Blog lesen', handler: '' },
        { label: 'Kontaktieren', handler: '' },
        { label: 'Angreifen', handler: '' }
      ]
    }
  ]);
  const introduction = useRef(['Hej! Ich bin Keisuke, der Frontend Developer aus Japan!', `Ich wohne seit ${liveInDESince.current} Jahren.`, 'Ich liebe Programmieren, Pilze sammeln und Kaffee!']);

  // Sound
  useEffect(() => {
    playGameBgm();

    return () => {
      stopGameBgm();
    };
  }, [playGameBgm, stopGameBgm]);

  // Check if all strings of message rendered.
  const checkMessageRendered = useCallback(() => {
    if (currPlot === null) return;

    const renderDelay = 0.5;
    const renderDurationPerString = 0.05;
    const currentMessageLength = plot.current[currPlot].message.length;
    const totalDuration = renderDelay + currentMessageLength * renderDurationPerString;

    setMessageRendered(false);
    const timer = setTimeout(() => {
      setMessageRendered(true);
    }, totalDuration * 1000);

    return () => {
      clearTimeout(timer);
      setMessageRendered(false);
    };
  }, [currPlot]);

  useEffect(() => {
    console.log('message rendered: ', messageRendered);
  }, [messageRendered]);

  useEffect(() => {
    checkMessageRendered();
  }, [checkMessageRendered]);

  // Handle Onclick window / Moving to next plot
  const onScreenClick = useCallback(() => {
    // ↓User have to finish initial page setup first
    if (!userSetted) return;

    // ↓On last item of plot, prevent user to move to next plot
    if (messageRendered && currPlot !== null && currPlot + 1 === plot.current.length) return;

    // ↓When rendering of all strings is not done yet, force to render all strings by clicking window
    if (!messageRendered && currPlot !== null) {
      const strings = messageRef.current?.querySelectorAll('span');
      strings!.forEach(string => (string.style.opacity = '1'));
      setMessageRendered(true);
    } else {
      // ↓ If all condition passed, move to next plot!
      setCurrPlot(state => (state === null ? 0 : state + 1));
    }
  }, [userSetted, messageRendered, messageRef, currPlot]);

  useEffect(() => {
    window.addEventListener('click', onScreenClick);

    return () => window.removeEventListener('click', onScreenClick);
  }, [onScreenClick]);

  return { currPlot, setCurrPlot, plot };
};
