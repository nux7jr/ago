const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth_chek');
/* GET home page. */
router.get('/', auth, (req, res, next) => {
  res.render('index', {
    title: 'Ago',
    isAuth: true,
  });
});

module.exports = router;
