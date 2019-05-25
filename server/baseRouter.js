const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('came to base router homepage');
  res.status(200).send('Welcome to the app home page');
});

module.exports = router;
