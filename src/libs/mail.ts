import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '51654c89954b7c',
    pass: '152a1bd115137c'
  }
});

export default transport;
