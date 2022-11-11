import { useRouter } from 'next/navigation';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { AppState } from '../../../store';

export type PlotType = { message: string; options: { label: string; handler: () => void }[] | null };

export const useCompState = ({ messageRef, mainRef }: { messageRef: RefObject<HTMLParagraphElement>; mainRef: RefObject<HTMLElement> }) => {
  const { playGameBgm, stopGameBgm } = useSound();
  const userSetted = useSelector<AppState>(state => state.setting.userSetted);
  const [lifeGauge, setLifeGauge] = useState<{ max: number; curr: number }>({ max: 100, curr: 100 });
  const [currPlot, setCurrPlot] = useState<number>(0);
  const [plotExeptions, setPlotExeptions] = useState<PlotType | null>(null);
  const [messageRendered, setMessageRendered] = useState(false);
  const router = useRouter();
  const plot = useRef<PlotType[]>([
    { message: 'Wild Keisuke appeared!', options: null },
    {
      message: 'What should I do?',
      options: [
        {
          label: 'Say hi',
          handler: () => {
            toNextPlot();
          }
        },
        {
          label: 'Read blog',
          handler: () => {
            router.push('/v1/blog');
          }
        },
        {
          label: 'Fight',
          handler: () => {
            setPlotExeptions({ message: 'You used Tackle!', options: null });
            mainRef.current!.classList.add('attack');
            const damageAmount = Math.floor(Math.random() * 15) + 15;
            console.log('damageAmount', damageAmount);
            // After attack
            setTimeout(() => {
              mainRef.current!.classList.remove('attack');
              setLifeGauge(state => ({ ...state, curr: state.curr - damageAmount <= 0 ? 0 : state.curr - damageAmount }));
            }, 1000);
            // After life gauge changed
          }
        },
        {
          label: 'Write mail',
          handler: () => {
            router.push('/v1/contact');
          }
        }
      ]
    },
    {
      message: "Hej! I'm Keisuke from Japan!",
      options: null
    },
    {
      message: 'I love programming and coffee!',
      options: null
    }
  ]);

  const toNextPlot = () => {
    setCurrPlot(state => state + 1);
  };

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

    // ↓if options appear, prevent user to move to next plot
    if (plot.current[currPlot].options !== null) return;

    // ↓On last plot, go back to second plot
    if (currPlot + 1 === plot.current.length) {
      setCurrPlot(1);
      return;
    }

    // ↓When rendering of all strings is not done yet, force to render all strings by clicking window
    if (!messageRendered) {
      const strings = messageRef.current?.querySelectorAll('span');
      if (!strings?.length) return;
      strings.forEach(string => (string.style.opacity = '1'));
      setMessageRendered(true);
    } else {
      // ↓ If all condition passed, move to next plot!
      toNextPlot();
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

  return { currPlot, plot, lifeGauge };
};
