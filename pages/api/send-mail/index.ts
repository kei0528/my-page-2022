import { NextApiRequest, NextApiResponse } from 'next';
import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.HOST_MAIL_USER,
    pass: process.env.HOST_MAIL_PASS,
  },
});

const sendMail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;
  const { subject, userMail, message } = JSON.parse(req.body);
  transporter.sendMail(
    {
      from: userMail,
      to: process.env.MAIL_TO,
      subject: `Email received from: ${userMail}!`,
      text: `Email received from: ${userMail}!`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
            "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html>
            <head>
              <title>Email was sent</title>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
              <meta content="width=device-width" name="viewport"/>
              <style type="text/css">
                body { width:100%; height:100%; margin:0; background-color:white; font-family:sans-serif; }
                .main { width:80%; padding: 30px; background-color:#f5f5f5;margin: auto; margin-top: 50px; text-align:center; }
                h1 { color:#3F4595; }
              </style>
            </head>
            <body>
              <div class="main">
              <h1>Email received!</h1>
              <h2>Subject</h2>
              <p>${subject}</p>
              <h2>Sender's mail address</h2>
              <p>${userMail}</p>
              <h2>Message</h2>
              <p>${message}</p>
              </div>
            </body>
            </html>`,
    },
    function (error) {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200);
      }
    }
  );
};

export default sendMail;
