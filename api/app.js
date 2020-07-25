require('dotenv').config();
var passportSetup = require('./config/passports-setup');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var passport = require('passport');

var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var favouritesRouter = require('./routes/favourites');
var videosRouter = require('./routes/videos');
var authRoutes = require('./routes/auth');

var dbURI = process.env.DB_URI;
var cookieKey = process.env.cookieKey;

var app = express();

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// connect to mongodb
mongoose.connect(dbURI, () => {
  console.log('connected to mongodb');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/favourites', favouritesRouter);
app.use('/findVideos', videosRouter);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cookieSession({
    // one day in milliseconds
    maxAge: 24 * 60 * 60 * 1000,
    // encrypt cookie id key
    keys: [cookieKey]
}))

// initialize passport


module.exports = app;
