const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const { check, validationResult } = require('express-validator');

const sendMessage = (email, name, text) => {
  sgMail.send({
    to: 'co_nov@naver.com',
    from: email,
    subject: `Commission Request ${name}`,
    text
  });
};

/// @route Post /
/// @desc send an email to the artist
/// @access Public
router.post(
  '/',
  [
    check('name', 'Please include a name/company')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('text', 'Please give me a brief idea of what you want')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      sgMail.setApiKey(process.env.SGMAIL_API_KEY);

      const { email, name, text } = req.body;
      sendMessage(email, name, text);
      res.json({ msg: 'Message Sent!' });
    } catch (e) {
      console.log(e);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
