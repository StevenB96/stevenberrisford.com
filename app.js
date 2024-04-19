var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('./config/cors');
// const dotenv = require('dotenv');

var indexRouter = require('./routes/index');

var app = express();

// /**
//  * Set env variables for app.
//  */

// dotenv.config({ path: path.resolve(__dirname, '..', '.env')});
// const environment = process.env.NODE_ENV || 'development';
// dotenv.config({ path: path.resolve(__dirname, '..', `../.env.${environment}`) });

/**
 * Configure CORS with allowed origins
 */

app.use(cors);

/**
 * View engine setup
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/**
 * Catch 404 and forward to error handler
 */

app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * Error handler
 */

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
