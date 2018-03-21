var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

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
      from: '"Fred Foo 👻" <mislam0525@gmail.com>', // sender address
      to: 'raiyanishmam@yahoo.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }

      console.log('Here')
      // console.log('Message sent: %s', info.messageId)
      // // Preview only available when sending through an Ethereal account
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
  })

module.exports = router
