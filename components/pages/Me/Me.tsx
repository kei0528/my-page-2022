'use client';

import s from './Me.module.scss';
import Image from 'next/image';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { Header } from '../../uis/Header';
import profImg from '../../../public/assets/images/Image_Keisuke-drawing.webp';
import { useRef } from 'react';
import { useCompState } from './Me.state';

const Me = () => {
  const profileImgRef = useRef<HTMLDivElement>(null);
  useCompState({ profileImgRef });

  return (
    <>
      <Header headline="Keisuke" intro="Hej! I'm" />
      <BaseMainLayout innerClassName="sm:px-8">
        <div
          className={`relative mx-auto mt-[-120px] h-40 w-40 overflow-hidden rounded-full border-8 border-white ${s.shadow}`}
          ref={profileImgRef}
        >
          <Image className="scale-[1.01] object-cover object-top" src={profImg} placeholder="blur" fill alt="" />
        </div>

        <div className="my-12 text-center text-base sm:text-lg">
          <h2>Hej! I´m Keisuke!</h2>
          <p></p>
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Me;
