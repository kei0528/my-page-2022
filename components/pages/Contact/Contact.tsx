'use client';

import s from './Contact.module.scss';
import Image from 'next/image';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { Header } from '../../uis/Header';
import { sendMail } from '../../../utils/mailServices';
import { regex } from '../../../statics/regexCollection';
import { fetchStatus, validateMessages } from '../../../statics/conditions';
import { useCompState } from './Contact.state';
import { v4 as uuid } from 'uuid';

const Contact = () => {
  const { errors, register, handleSubmit, setSendStatus, sendStatus } = useCompState();

  return (
    <>
      <Header intro="Let's have a chat!" headline="Contact" />
      <BaseMainLayout>
        {sendStatus === 'LOADING' ? (
          <div className="my-20 flex flex-col items-center">
            <Image
              src="/assets/images/Image_Keisuke-game-full.webp"
              width={332}
              height={800}
              alt=""
              className={s.loading_kei}
            />
            <p className={s.loading_message}>
              {'Sending message...'.split('').map((str, index) => (
                <span
                  style={{ animationDelay: `${index * 0.1}s`, marginRight: str === ' ' ? '12px' : '0' }}
                  key={uuid()}
                >
                  {str}
                </span>
              ))}
            </p>
          </div>
        ) : sendStatus === 'ERROR' ? (
          <div className="py-20">
            <div className=" flex animate-pulse flex-col items-center text-3xl font-bold text-red">
              !
              <Image
                src="/assets/images/Image_Keisuke-game-full.webp"
                width={332}
                height={800}
                alt=""
                className="ml-0.5 w-16 hue-rotate-180"
              />
            </div>

            <h5 className="mt-6 text-center font-bold tracking-wider">
              Oh! Failed to send mail. Please try again later.
            </h5>
          </div>
        ) : sendStatus === 'SUCCESS' ? (
          <div className={s.send_success_container}>
            <span className={`text-turkey ${s.send_success}`}>THANKS</span>
            <span className={`text-life-green ${s.send_success}`}>DANKE</span>
            <span className={`text-light-text-purple ${s.send_success}`}>TACK</span>
            <span className={`text-red ${s.send_success}`}>ありがとう</span>
          </div>
        ) : (
          <div className="relative mx-auto -mt-24  mb-12 max-w-xl ">
            <form
              className={`relative z-20 flex flex-col rounded-xl bg-white p-5 shadow-xl dark:border-2 dark:border-lighter-grey dark:bg-darker-grey dark:shadow-none sm:mb-20 sm:p-8 ${s.shadow}`}
              onSubmit={handleSubmit(async ({ subject, userMail, userMessage }) => {
                setSendStatus('LOADING');
                const result = await sendMail({ subject, message: userMessage, userMail });
                setSendStatus(result.status === fetchStatus.success ? 'SUCCESS' : 'ERROR');
              })}
            >
              <div className={s.wrapper}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Your email"
                  {...register('userMail', {
                    required: { value: true, message: validateMessages.mailAddressRequired },
                    pattern: { value: regex.mail, message: validateMessages.MailAddressInvalid },
                  })}
                />
                {errors.userMail && <span className={s.error}>{errors.userMail.message?.toString()}</span>}
              </div>

              <div className={s.wrapper}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Subject"
                  {...register('subject', {
                    maxLength: {
                      value: 30,
                      message: validateMessages.subjectTooLong,
                    },
                  })}
                />
                {errors.subject && <span className={s.error}>{errors.subject.message?.toString()}</span>}
              </div>

              <div className={s.wrapper}>
                <textarea
                  className={`${s.input} h-72 resize-none`}
                  placeholder="Message"
                  {...register('userMessage', {
                    required: { value: true, message: validateMessages.messageRequired },
                    maxLength: {
                      value: 1000,
                      message: validateMessages.messageTooLong,
                    },
                  })}
                ></textarea>
                {errors.userMessage && <span className={s.error}>{errors.userMessage.message?.toString()}</span>}
              </div>

              <button className="block rounded-md border-3 border-gb-purple bg-turkey px-3 py-2 text-lg font-bold tracking-widest text-white duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white dark:bg-army-green">
                Send!
              </button>
            </form>
            <div className={s.keisuke}>
              <Image src="/assets/images/Image_Keisuke-game.webp" alt="" fill />
            </div>
          </div>
        )}
      </BaseMainLayout>
    </>
  );
};

export default Contact;
