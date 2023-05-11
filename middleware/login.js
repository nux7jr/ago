module.exports = (req, res, next) => {
  const myusername = 'admin'
  const mypassword = 'pass'

  // a variable to save a session
  var session;

  if (req.body.password == "pass" && req.body.username == "admin") {
    session = req.session;
    session.userid = req.body.username;
    // console.log(req.session);
    // console.log("succsess")
    res.redirect("/");
    // res.render('index');
  } else {
    console.log("error")
    res.render("login", { error: "Wrong login or password" })
  }
}