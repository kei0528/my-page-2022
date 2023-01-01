'use client';

import s from './Me.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { Header } from '../../uis/Header';
import profImg from '../../../public/assets/images/Image_Keisuke-drawing.webp';
import { useCompState } from './Me.state';
import Link from 'next/link';

const Listitem = ({ label }: { label: string }) => {
  return <li className="w-fit rounded border border-black py-0.5 px-2 dark:border-white">{label}</li>;
};

const Me = () => {
  const profileImgRef = useRef<HTMLDivElement>(null);
  const { clicked, setClicked } = useCompState({ profileImgRef });

  return (
    <>
      <Header headline="Keisuke" intro="Hej! I'm" />
      <BaseMainLayout innerClassName="sm:px-8">
        <div className={`${s.spinner} ${clicked ? s.spinning : s.spin_stop}`}>
          <div
            className={`relative mx-auto mt-[-120px] h-40 w-40 cursor-pointer overflow-hidden rounded-full border-8 border-white dark:border-lighter-gb-purple ${s.shadow}`}
            ref={profileImgRef}
            onClick={() => {
              setClicked(true);
              setTimeout(() => {
                setClicked(false);
              }, 2500);
            }}
          >
            <Image className="scale-[1.01] object-cover object-top" src={profImg} placeholder="blur" fill alt="" />
          </div>
        </div>

        <article className="template-html my-12 text-left text-base sm:text-lg">
          <h2 className="mb-6 text-2xl font-bold">Nice to see you!</h2>
          <p>
            I’m Keisuke - a father of two energetic sons, passionate about programming and coffee. Together with my
            sons, I love to go to the forest and pick up mushrooms, collect wild herbs and discover nature.
          </p>
          <p>
            For many years, I worked as a barista in a small coffee shop. I loved serving my coffee to my customers and
            listening to stories of their life.
          </p>
          <p>
            One regular customer told about her travel around the world. She slept in a tent in the middle of the
            Sahara, climbed up to Irish mountain - even though she’s 80 years old.
          </p>
          <p>
            Some other customer told he was a gynaecologist in Africa and has a brother from Pakistan - however, it was
            all lie. He was a sailor and lived in Africa for many years. His best friend came from Pakistan.
          </p>

          <p>
            I was surprised how diverse people can be. My dream at this time was to become a great barista and run my
            coffee shop with my wife. But on the other hand, I was always worried about my future. My father also worked
            in the food industry and I knew how tough it can be. Life of working as a barista and running own business
            means that there is no time to spend with family.
          </p>
          <p>
            In 2020, because of Covid pandemic, the coffee shop where I worked had to close for many months. At this
            time, my wife suggested me to try programming. She knew that I was a computer nerd when I was a teenager. I
            followed her idea and started to learn programming. I built my first website using HTML, CSS and JavaScript.
            This lit fire in me. It was just so much fun to write program and wanted to learn more and more. After one
            year of teaching programming myself, I changed my job to Frontend Developer.
          </p>
          <p>
            My main focus is developing web applications. In my full-time and part-time job, I write frontend codes and
            in my free time I try to get better at writing backend staff.
          </p>
          <p>
            I love programming and can’t stop learning it. Maybe at some point, I return back to the coffee industry -
            but before doing that, I have still so many ideas that I want to try with programming. Keep learning,
            hard-working and give always my best!
          </p>
        </article>
      </BaseMainLayout>
    </>
  );
};

export default Me;
