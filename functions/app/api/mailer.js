const mailer = require('nodemailer');

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ayrtonkrizan@gmail.com',
           pass: '7898133290015'
       }
   });

var api = {};

api.sendEmail = (email, text) => {

    console.log('vou enviar')
    let options = {
        from: 'ayrtonkrizan@gmail.com',
        to: email,
        subject: '[Always Konnected] - Nova empresa cadastrada!!',
        text: text
      };


      transporter.sendMail(options, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
}

module.exports = api;