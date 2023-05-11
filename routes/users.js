const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth_chek');
/* GET users listing. */
router.get('/', auth, (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
