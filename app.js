const createError = require('http-errors');
const express = require('express');
const path = require('path');

require('dotenv').config()

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sessions = require("express-session");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const sitesRouter = require('./routes/sites');
const logoutRouter = require('./routes/logout');
const editSiteRouter = require('./routes/editSite');


const hbs = require('hbs');
const mysql = require('mysql')

const app = express();

hbs.registerPartials(__dirname + '/views/partials', function (err) { });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)
app.use('/sites', sitesRouter)
app.use('/logout', logoutRouter)
app.use("/edit-site/:id", editSiteRouter)
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in developments

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
