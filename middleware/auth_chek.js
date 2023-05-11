module.exports = (req, res, next) => {
  session = req.session;
  if (session.userid) {
    next()
  } else {
    res.redirect("/login");
  }
}