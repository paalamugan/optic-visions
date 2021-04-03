const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const Mailgun = require('mailgun-js');
const  _  = require('lodash');
const config = require('../config');
const { emailTemplate } = require('../templates');

let mailer = {
    from: '"Optic Visions" <paalamugan26@gmail.com>',
    smtp: config.mailtrap
};

if (config.gmail.auth.user) {
    mailer.smtp = config.gmail;
}

let transporter;
let mailgun;
let sendgrid;

if (process.env.NODE_ENV === 'production') {

    if (config.mailgun.apiKey) {
        mailgun = new Mailgun({
            apikey: config.mailgun.apiKey,
            domain: config.mailgun.domain
        });
    } else if (config.sendgrid.apiKey) {
       sendgrid = require('@sendgrid/mail');
       sendgrid.setApiKey(config.sendgrid.apiKey);
    } else {
        transporter = nodemailer.createTransport(mailer.smtp);
    }

} else {
    transporter = nodemailer.createTransport(mailer.smtp);
}

const send = (options) => {

    if (mailgun) {
        return new Promise((resolve, reject) => {
            mailgun.messages().send(options, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
    } 
    
    if (sendgrid) {
        return sendgrid.send(options);
    }

    if (transporter) {

        transporter.use("compile", htmlToText());

        options.to = _.isArray(options.to) ? options.to[0] : options.to;

        console.log(`Sending email to ${options.to} with subject ${options.subject}...`);

        return new Promise((resolve, reject) => {
            transporter.sendMail(options, (err, info) => {
                if (err) {
                    console.warn("Unable to send email: ", err);
                    reject(err);
                } else {
                    console.info("Email message sent.", info.response);
                    return resolve(info);
                }
            });
        });

    } else {
        // console.warn("Unable to send email! Invalid mailer transport: stmp" );
        return Promise.reject("Unable to send email! Invalid mailer transport: stmp");
    }
};

const sendToMail = exports.sendToMail = async (name, body) => {

    if (!name) {
        throw new Error("name is missing");
    }

    if (!body.to) {
        throw new Error("To email address is missing");
    }

    let data = body.data || {};

    let options = {
        from: body.from || mailer.from,
        to: body.to,
        subject: body.subject
    };

    options.html = await emailTemplate(name, data);

    if (body.cc) {
        options.cc = body.cc;
    }

   return send(options);
};

exports.sendRegisterMail = async (to, data) => {
    
    let body = {
        subject: "Successfully Registration in Optic Visions.",
        to: to,
        data: data
    }

    return await sendToMail("register", body);
}

exports.sendForgetPasswordMail = async (to, data) => {
    
    let body = {
        subject: "Reset Your Passowrd in Optic Visions",
        to: to,
        data: data
    }

    return await sendToMail("forget-passowrd", body);
}