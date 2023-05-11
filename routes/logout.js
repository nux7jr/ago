const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
  req.session.destroy();
  res.render('login');
});
module.exports = router;
