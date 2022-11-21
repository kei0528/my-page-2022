import { useRouter } from 'next/navigation';
import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VanillaTilt from 'vanilla-tilt';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { useSound } from '../../../hooks/useSound';
import { ssKeys } from '../../../statics/sessionStorageKeys';
import { AppState } from '../../../store';
import { setSettings, SettingType } from '../../../store/reducers/setting.reducer';
import { sessionStorageServices } from '../../../utils/sessionStorageServices';
import { isTouchDevice } from '../../../utils/environmentServices';

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
              setCurrPlot(7);

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
        message: "Hej! I'm Keisuke!",
        options: null,
        returnToOption: false,
      },
      {
        message: "I'm a frontend developer. I love programming!",
        options: null,
        returnToOption: false,
      },
      {
        message: 'Before starting my career as developer, I was a barista.',
        options: null,
        returnToOption: false,
      },
      {
        message: 'I love coffee!',
        options: null,
        returnToOption: false,
      },
      {
        message: 'Do you want know more about me?',
        options: [
          { label: 'Yes', handler: () => router.push('/v1/me') },
          { label: 'No', handler: () => setCurrPlot(1) },
        ],
        returnToOption: false,
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
          { label: 'About', handler: () => router.push('/v1/me') },
          { label: 'Blog', handler: () => router.push('/v1/blog') },
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

  // Add Tillt effect
  useEffect(() => {
    if (!gbRef.current || isTouchDevice) return;
    VanillaTilt.init(gbRef.current, {
      max: 5,
      scale: 1.05,
      reverse: true,
      transition: true,
      speed: 500,
      perspective: 900,
    });
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

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
      playGameOverBgm();
    }

    return () => {
      stopGameBgm();
      stopGameOverBgm();
    };
  }, [playGameBgm, stopGameBgm, lifeGauge, playGameOverBgm, stopGameOverBgm]);

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

  return { currPlot, plot, lifeGauge, particlesInit };
};
