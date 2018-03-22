var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
let toEmail = 'raiyanishmam@yahoo.com'
router.route('/send')
  .get((req, res) => {
    let transporter = nodemailer.createTransport({
      // host: 'smtp.google.com',
      // port: 465,
      // secure: true, // true for 465, false for other ports
      service: 'gmail',
      auth: {
        user: 'wup2emailer@gmail.com',
        pass: 'EASYpass'
      }
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Fred Foo 👻" <wup2emailer@gmail.com>', // sender address
      to: toEmail, // list of receivers
      subject: 'Account Verification', // Subject line
      text: 'Verification key is: opensesame', // plain text body
      html: '<b>Verification key is: opensesame</b>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      res.send ({
        status: "OK"
      })
      console.log('Message sent: %s', info.messageId)
    })
  })

module.exports = router
