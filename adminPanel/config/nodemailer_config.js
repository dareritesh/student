var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host:'gator4160.hostgator.com',
    port: 465,
    secure: true,
    auth: {
        user: 'janardan@cyperts.net',
        pass: 'Jaanjaan574'
    }
});

module.exports = transporter;
