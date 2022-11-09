'use client';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useSound } from '../../../hooks/useSound';
import { toggleGlobalMenuIsShown } from '../../../store/reducers/ui.reducer';

export const SideNav = () => {
  const { playMenuToggleSound } = useSound();
  const dispatch = useDispatch();

  return (
    <nav className='fixed bottom-0 z-50 flex w-screen justify-between bg-gb-purple px-2 py-3 landscape:right-0 landscape:h-screen landscape:w-fit landscape:flex-col-reverse landscape:py-5 landscape:pl-4'>
      <a className='flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-lighter-grey shadow-btn shadow-lighter-gb-purple landscape:shadow-btn-vertical landscape:shadow-lighter-gb-purple ' href='https://github.com/kei0528' target='_blank' rel='noreferrer'>
        <Image className='landscape:rotate-90 ' alt='Github' src='/assets/icons/Icon_Github.svg' priority width={20} height={20} />
      </a>
      <div className='relative flex h-fit items-center gap-2 rounded-full bg-light-gb-purple px-3 py-2 leading-3 shadow-btn-inner landscape:flex-col landscape:pr-1 landscape:pl-2'>
        <label className='font-bold text-lighter-gb-purple drop-shadow-md landscape:writing-mode-vertical' htmlFor='g-menu'>
          Menu
        </label>
        <button
          className='-mb-1 block h-6 w-6 rounded-full bg-lighter-grey shadow-btn shadow-lighter-gb-purple landscape:shadow-btn-vertical landscape:shadow-lighter-gb-purple'
          id='g-menu'
          aria-label='Menu'
          onClick={() => {
            dispatch(toggleGlobalMenuIsShown());
            playMenuToggleSound();
          }}
        ></button>
      </div>
      <div className='absolute bottom-full left-0 translate-y-0.5 text-[0] portrait:block landscape:hidden'>
        <Image alt='' src='/assets/bg/gb-lb.svg' width={24} height={28} />
      </div>
      <div className='absolute bottom-full right-0 translate-y-0.5 text-[0] portrait:block landscape:hidden'>
        <Image alt='' src='/assets/bg/gb-rb.svg' width={24} height={28} />
      </div>
      <div className='absolute top-0 right-full h-7 w-8 translate-x-1  text-[0] portrait:hidden landscape:block'>
        <Image alt='' src='/assets/bg/gb-rb-hori.svg' width={32} height={28} />
      </div>
      <div className='absolute bottom-0 right-full h-7 w-8 translate-x-1  text-[0] portrait:hidden landscape:block'>
        <Image alt='' src='/assets/bg/gb-rt-hori.svg' width={32} height={28} />
      </div>
    </nav>
  );
};
