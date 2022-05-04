const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "81ab128dccb433",
      pass: "62f7a24d3e89b5"
    }
  });

  transport

module.exports=transport