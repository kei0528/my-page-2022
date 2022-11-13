import { urls } from '../statics/urls';

export const fetcher = async (url: string) => {
  const data = await fetch(url);
  return await data.json();
};

export type SendMailType = {
  userMail: string;
  subject: string;
  message: string;
};

export const sendMail = async (body: SendMailType) => {
  const res = await fetch(urls.baseUrl + 'api/send-mail', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};
