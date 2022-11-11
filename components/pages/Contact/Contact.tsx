import s from './Contact.module.scss';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { Header } from '../../uis/Header';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Header intro="Let's have a chat!" headline="Contact" />
      <BaseMainLayout>
        <div className="relative mx-auto -mt-24  mb-12 max-w-xl ">
          <form className={`relative z-20 flex flex-col rounded-xl bg-white p-5 shadow-xl sm:mb-20 sm:p-8 ${s.shadow}`}>
            <input className={s.input} type="text" placeholder="Your email" />
            <textarea className={`${s.input} h-72 resize-none`} placeholder="Message"></textarea>
            <button className="block rounded-md border-3 border-gb-purple bg-turkey px-3 py-2 text-lg font-bold tracking-widest text-white duration-200 hover:-translate-y-1 hover:shadow-lg">
              Send!
            </button>
          </form>
          <div className={s.keisuke}>
            <Image src="/assets/images/Image_Keisuke-game.webp" alt="" fill />
          </div>
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Contact;
