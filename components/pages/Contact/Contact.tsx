'use client';

import s from './Contact.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { Header } from '../../uis/Header';
import { sendMail } from '../../../utils/fetchServices';
import { regex } from '../../../statics/regexCollection';
import { validateMessages } from '../../../statics/conditions';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Header intro="Let's have a chat!" headline="Contact" />
      <BaseMainLayout>
        <div className="relative mx-auto -mt-24  mb-12 max-w-xl ">
          <form
            className={`relative z-20 flex flex-col rounded-xl bg-white p-5 shadow-xl sm:mb-20 sm:p-8 ${s.shadow}`}
            onSubmit={handleSubmit(async ({ subject, userMail, userMessage }) => {
              const result = await sendMail({ subject, message: userMessage, userMail });
              console.log(result);
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
