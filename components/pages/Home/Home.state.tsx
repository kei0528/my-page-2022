import { useRouter } from 'next/router';
import { MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { AppState } from '../../../store';

export const useCompState = ({ messageRef, mainRef }: { messageRef: RefObject<HTMLParagraphElement>; mainRef: RefObject<HTMLElement> }) => {
  const { playGameBgm, stopGameBgm } = useSound();
  const userSetted = useSelector<AppState>(state => state.setting.userSetted);
  const [currPlot, setCurrPlot] = useState<number>(0);
  const [messageRendered, setMessageRendered] = useState(false);
  const liveInDESince = useRef(new Date().getFullYear() - 2007);
  const router = useRouter();
  const plot = useRef([
    { message: 'Ein wilder Keisuke erscheint!', option: null },
    {
      message: 'Was möchtest du tun?',
      options: [
        {
          label: 'Hallo sagen',
          handler: () => {
            console.log('hello!');
          }
        },
        { label: 'Blog lesen', handler: () => {} },
        { label: 'Angreifen', handler: () => {} },
        {
          label: 'Flucht',
          handler: () => {
            router?.push('/v1/contact');
          }
        }
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
    checkMessageRendered();
  }, [checkMessageRendered]);

  // Handle Onclick main element (to next plot)
  const onScreenClick = useCallback(() => {
    // ↓User have to finish initial page setup first
    if (!userSetted) return;

    // ↓On last item of plot, prevent user to move to next plot
    if (messageRendered && currPlot + 1 === plot.current.length) return;

    // ↓When rendering of all strings is not done yet, force to render all strings by clicking window
    if (!messageRendered) {
      const strings = messageRef.current?.querySelectorAll('span');
      if (!strings?.length) return;
      strings.forEach(string => (string.style.opacity = '1'));
      setMessageRendered(true);
    } else {
      // ↓ If all condition passed, move to next plot!
      setCurrPlot(state => state + 1);
    }
  }, [userSetted, messageRendered, messageRef, currPlot]);

  useEffect(() => {
    const events = ['click', 'keypress'];
    const main = mainRef.current;
    events.forEach(event => {
      main?.addEventListener(event, onScreenClick);
    });

    return () => {
      events.forEach(event => {
        main?.removeEventListener(event, onScreenClick);
      });
    };
  }, [onScreenClick, mainRef]);

  return { currPlot, setCurrPlot, plot };
};
