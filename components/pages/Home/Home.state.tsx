import { useRouter } from 'next/navigation';
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { ssKeys } from '../../../statics/sessionStorageKeys';
import { AppState } from '../../../store';
import { setSettings, SettingType } from '../../../store/reducers/setting.reducer';
import { sessionStorageServices } from '../../../utils/sessionStorageServices';

export type PlotType = {
  message: string;
  returnToOption: boolean;
  options: { label: string; handler: () => void }[] | null;
};

export const useCompState = ({
  messageRef,
  mainRef,
  gbRef,
  imageRef,
  lifeGaugeRef,
}: {
  gbRef: RefObject<HTMLDivElement>;
  messageRef: RefObject<HTMLParagraphElement>;
  mainRef: RefObject<HTMLElement>;
  lifeGaugeRef: RefObject<HTMLDivElement>;
  imageRef: RefObject<HTMLDivElement>;
}) => {
  const dispatch = useDispatch();
  const { playGameBgm, stopGameBgm, playAttackSound, playFaintedSound, playGameOverBgm, stopGameOverBgm } = useSound();
  const userSetted = useSelector<AppState>((state) => state.setting.userSetted);
  const [lifeGauge, setLifeGauge] = useState<{ max: number; curr: number }>({ max: 100, curr: 100 });
  const [currPlot, setCurrPlot] = useState<number>(0);
  const [messageRendered, setMessageRendered] = useState(false);
  const router = useRouter();
  const plot: PlotType[] = useMemo(
    () => [
      { message: 'Wild Keisuke appeared!', options: null, returnToOption: false },
      {
        message: 'What should I do?',
        returnToOption: false,
        options: [
          {
            label: 'Say Hi',
            handler: () => {
              toNextPlot();
            },
          },
          {
            label: 'Read Blog',
            handler: () => {
              router.push('/v1/blog');
            },
          },
          {
            label: 'Fight',
            handler: () => {
              playAttackSound();
              const imgElm = imageRef.current!.querySelector('img');
              imgElm!.classList.add('attacked');
              setCurrPlot(10);

              const damageAmount = Math.floor(Math.random() * 15) + 30;
              // After attack
              setTimeout(() => {
                imgElm!.classList.remove('attacked');
                setLifeGauge((state) => {
                  const lifeGaugeUpdatged = state.curr - damageAmount;
                  if (lifeGaugeUpdatged <= 0) {
                    playFaintedSound();
                    gbRef!.current?.classList.add('fainted');
                    lifeGaugeRef!.current?.classList.add('fainted');
                    imgElm!.classList.add('fainted');
                  }

                  return {
                    ...state,
                    curr: state.curr - damageAmount <= 0 ? 0 : state.curr - damageAmount,
                  };
                });
              }, 1000);
            },
          },
          {
            label: 'Write Mail',
            handler: () => {
              router.push('/v1/contact');
            },
          },
        ],
      },
      {
        message: "Hej! I'm Keisuke from Japan!",
        options: null,
        returnToOption: false,
      },
      {
        message: 'I was a barista for many years. I love coffee!',
        options: null,
        returnToOption: false,
      },
      {
        message: 'Now I changed my job and am a frontend developer!',
        options: null,
        returnToOption: false,
      },
      {
        message: 'I love programming!',
        options: null,
        returnToOption: false,
      },
      {
        message: 'I used TypeScript + Next.js for building this page,',
        options: null,
        returnToOption: false,
      },
      {
        message: 'Tailwind CSS for making this place beautiful,',
        options: null,
        returnToOption: false,
      },
      {
        message: 'and Redux for helping me store states.',
        options: null,
        returnToOption: false,
      },
      {
        message: 'Hope you like this place!',
        options: null,
        returnToOption: true,
      },
      { message: 'You used Tackle!', options: null, returnToOption: false },
      {
        message:
          lifeGauge.curr <= 0 ? 'Keisuke fainted!' : lifeGauge.curr <= 40 ? 'Keisuke is weak!' : 'Keisuke is sad!',
        options: null,
        returnToOption: lifeGauge.curr > 0,
      },
      {
        message: 'Want check another page?',
        options: [
          { label: 'Blog', handler: () => router.push('/v1/blog') },
          { label: 'About', handler: () => router.push('/v1/me') },
          { label: 'Contact', handler: () => router.push('/v1/contact') },
          { label: 'Github', handler: () => (window.location.href = 'https://github.com/kei0528') },
        ],
        returnToOption: true,
      },
    ],
    [lifeGauge.curr, playAttackSound, imageRef, router, playFaintedSound, gbRef, lifeGaugeRef]
  );

  const toNextPlot = () => {
    setCurrPlot((state) => state + 1);
  };

  // Set localstorage data to Redux at first render
  useEffect(() => {
    const localStorageData: SettingType = {
      language: sessionStorageServices.get(ssKeys.language) ?? 'en',
      gbColor: sessionStorageServices.get(ssKeys.gbColor) ?? '#3F4595',
      soundsOn: sessionStorageServices.get(ssKeys.soundsOn) ?? false,
      userSetted: sessionStorageServices.get(ssKeys.userSetted) ?? false,
    };
    dispatch(setSettings(localStorageData));
  }, [dispatch]);

  // Sound
  useEffect(() => {
    if (lifeGauge.curr !== 0) {
      playGameBgm();
    } else {
      stopGameBgm();
      setTimeout(() => {
        playGameOverBgm();
      }, 1000);
    }

    return () => {
      stopGameBgm();
      stopGameBgm();
    };
  }, [playGameBgm, stopGameBgm, lifeGauge, playGameOverBgm]);

  // Check if all strings of message rendered.
  const checkMessageRendered = useCallback(() => {
    if (currPlot === null) return;
    setMessageRendered(false);

    const renderDelay = 0.5;
    const renderDurationPerString = 0.05;
    const currentMessageLength = plot[currPlot].message.length;
    const totalDuration = renderDelay + currentMessageLength * renderDurationPerString;

    const timer = setTimeout(() => {
      setMessageRendered(true);
    }, totalDuration * 1000);

    return () => {
      clearTimeout(timer);
      setMessageRendered(true);
    };
  }, [currPlot, plot]);

  useEffect(() => {
    checkMessageRendered();
  }, [checkMessageRendered]);

  // Handle Onclick main element (to next plot)
  const onScreenClick = useCallback(() => {
    // ↓User have to finish initial page setup first
    if (!userSetted) return;

    // ↓if options appear, prevent user to move to next plot
    if (plot[currPlot].options !== null) return;

    // ↓When rendering of all strings is not done yet, force to render all strings by clicking window
    if (!messageRendered) {
      const strings = messageRef.current?.querySelectorAll('span');
      if (!strings?.length) return;
      strings.forEach((string) => (string.style.opacity = '1'));
      setMessageRendered(true);
      return;
    }

    // ↓if returnToOption is true, than return to plot[1]
    if (!!plot[currPlot].returnToOption) {
      setCurrPlot(1);
      return;
    }

    // ↓On last plot, go back to second plot
    if (currPlot + 1 === plot.length) {
      setCurrPlot(1);
      return;
    }

    // ↓ If all condition passed, move to next plot!
    toNextPlot();
  }, [userSetted, messageRendered, messageRef, currPlot, plot]);

  useEffect(() => {
    const events = ['click', 'keypress'];
    const main = mainRef.current;
    events.forEach((event) => {
      main?.addEventListener(event, onScreenClick);
    });

    return () => {
      events.forEach((event) => {
        main?.removeEventListener(event, onScreenClick);
      });
    };
  }, [onScreenClick, mainRef]);

  return { currPlot, plot, lifeGauge };
};
