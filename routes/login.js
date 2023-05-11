const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
/* GET auth. */
router.get('/', (req, res, next) => {
  res.render('login');
});
router.post('/', login, (req, res, next) => {
  res.render('index');
});
module.exports = router;
