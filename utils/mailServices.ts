import { urls } from '../statics/urls';
import { SendMailType } from '../types/api/mail';

export const sendMail = async (body: SendMailType) => {
  const res = await fetch(urls.baseUrl + 'api/send-mail', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};
