const nodemailer = require("nodemailer");

// eslint-disable-next-line import/prefer-default-export
const sendmail = (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      port: 465, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        user: 'chavan.vinayak017@gmail.com',
        pass: process.env.MAIL_PASSWORD,
      },
      secure: true,
      requireTLS: true,
    });

    const mailOptions = {
      from: 'chavan.vinayak017@gmail.com',
      to: to,
      subject: subject,
      html: html,
    };
    console.log('mail sent');
    transporter.sendMail(mailOptions);

  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {sendmail};