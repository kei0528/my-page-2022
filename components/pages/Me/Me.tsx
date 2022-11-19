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

        <article className="template-html my-12 text-center text-base sm:text-lg">
          <h2 className="mb-6 text-2xl font-bold">Nice to see you!</h2>
          <p>
            My name is Keisuke. I&apos;m a frontend developer, coffee scientist and father of two energetic sons based
            in Pirmasens - a small town in Germany close to France. Currently planning to move to Sweden🇸🇪
          </p>
          <p>
            Before I started to work as a developer, I was a barista for many years. I love coffee! Especially
            Ethiopian-washed processed coffee. Hmm, but Kenyan is also great… Wait Burundi is... When I start to talk
            about coffee, someone has to stop me! I joy talking about coffee as much as I love drinking coffee.
          </p>
          <p>
            I loved life as a barista, however, the time of Covid arrived and the café where I worked had to close for a
            while. At this time, I decided to create a{' '}
            <a
              className="!dark:text-[#e5bc6b] !text-[#c5963a]"
              href="https://buddekaffee.de"
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>{' '}
            for the café and started to learn HTML/CSS/JS. And it lit a fire in me! It was so fun to learn it, and I was
            surprised how the codes I write on my editor turn to the website. I felt like it was magic! After a few
            hours of learning, I researched how to become a software developer. After a year of self-learning, I got
            hired by a company in Berlin -
            <a className="ml-1 !text-[#0cc147]" href="https://octily.com/" target="_blank" rel="noreferrer">
              Octily
            </a>
            , and am still working there with a lot of excitement.
          </p>
          <p>
            At Octily, we develop creative web applications that help people in the HR industry to stay productive.
            Thanks to many clients of all types and genres, we develop a diverse range of applications, from dashboard
            pages to interactive maps.
          </p>
          <p>
            At the weekend, I join a dev team of a{' '}
            <a className="!text-red" href="https://plusclass-sports-incubation.co.jp/" target="_blank" rel="noreferrer">
              startup company
            </a>{' '}
            in Japan and develop a matching tool that connects sports teams to sponsors. Here we try many different
            modern technologies and discuss how we can create a FAST web application.
          </p>
          <p>
            I&apos;m always very curious about exploring technologies and playing with many languages & frameworks -
            however, my most strength and favourite techs are below:
          </p>
          <ul className="my-10 flex flex-col items-center gap-4">
            <Listitem label="JavaScript/Node.js/TypeScript" />
            <Listitem label="React/Next.js" />
            <Listitem label="Solid.js" />
            <Listitem label="Express" />
            <Listitem label="Tailwind CSS" />
          </ul>
          <p>
            For two years, I have been writing lines of code every day, but I never get bored. I always would be happy
            to work on a challenging project and open to trying and learning something new🙂 Drop me some{' '}
            <Link href="/v1/contact">message</Link> and let&apos;s talk about technology (and coffee☕️)!
          </p>
          <p>Tack!</p>
        </article>
      </BaseMainLayout>
    </>
  );
};

export default Me;
